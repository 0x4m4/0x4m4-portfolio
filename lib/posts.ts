import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostMetadata } from '@/types/post'

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.md$/, ''),
        content,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
      } as PostMetadata
    })
    .sort((a, b) => (a.date && b.date ? (a.date > b.date ? -1 : 1) : 0))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
} 