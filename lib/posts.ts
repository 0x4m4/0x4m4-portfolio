import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostMetadata } from '@/types/post'

export function getPostData(slug: string) {
  try {
    const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      throw new Error('Post not found')
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return matter(fileContents)
  } catch (error) {
    throw new Error('Post not found')
  }
}

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
      } as PostMetadata
    })
    .sort((a, b) => (a.date && b.date ? (new Date(b.date).getTime() - new Date(a.date).getTime()) : 0))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
} 