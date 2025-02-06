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
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return NextResponse.json({ data, content })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}