import "./globals.css"
import { Space_Mono } from "next/font/google"
import type React from "react"
import Script from "next/script"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "0x4m4",
              jobTitle: "Ethical Hacker & Cyber Security Specialist",
              url: "https://www.0x4m4.com",
              sameAs: ["https://github.com/0x4m4", "https://twitter.com/0x4m4", "https://www.linkedin.com/in/0x4m4"],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Air University, Islamabad",
              },
              knowsAbout: [
                "Ethical Hacking",
                "Cyber Security",
                "Penetration Testing",
                "Network Security",
                "Cryptography",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

