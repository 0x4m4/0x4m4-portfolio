import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
} 