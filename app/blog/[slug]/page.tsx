import { Terminal, Home } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'

// Import MDXContent with no SSR
const MDXContent = dynamic(() => import('./MDXContent'), {
  ssr: false,
  loading: () => <div className="text-red-500/60 font-mono">Loading content...</div>
})

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Use direct file system access instead of API route
    const { data } = getPostData(params.slug)
    
    if (!data) {
      return {
        title: 'Post Not Found | 0x4m4',
        description: 'The requested blog post could not be found.'
      }
    }

    const title = `${data.title} | 0x4m4`
    const description = data.description || 'A blog post by 0x4m4'

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: data.date,
        authors: ['0x4m4'],
        tags: data.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      }
    }
  } catch (error) {
    return {
      title: 'Post Not Found | 0x4m4',
      description: 'The requested blog post could not be found.'
    }
  }
}

// Create a new client component for the interactive parts
const BlogPostContent = dynamic(() => import('./BlogPostContent'), { ssr: false })

export default function BlogPost({ params }: Props) {
  try {
    // Verify the post exists before rendering
    getPostData(params.slug)
    return <BlogPostContent params={params} />
  } catch (error) {
    notFound()
  }
} 