import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const fullPath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`)
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Validate required fields
    if (!data.title || !data.date) {
      return NextResponse.json(
        { error: 'Invalid post data' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      data: {
        ...data,
        date: new Date(data.date).toISOString(),
      },
      content
    })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}