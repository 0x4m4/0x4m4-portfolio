import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/blog')
    const fileNames = fs.readdirSync(postsDirectory)

    const posts = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        id,
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
        tags: data.tags || [],
      }
    }).sort((a, b) => ((a.date ?? '') < (b.date ?? '') ? 1 : -1))

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
} 