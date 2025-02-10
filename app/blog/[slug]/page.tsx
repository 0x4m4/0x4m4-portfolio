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
    const { data } = getPostData(params.slug)
    
    if (!data) {
      return {
        title: 'Post Not Found | 0x4m4',
        description: 'The requested blog post could not be found.',
      }
    }

    const title = `${data.title} | 0x4m4`
    const description = data.description || `A blog post by 0x4m4 about ${data.title}`

    return {
      title,
      description,
      openGraph: {
        title: data.title,
        description,
        url: `https://0x4m4.com/blog/${params.slug}`,
        siteName: '0x4m4',
        locale: 'en_US',
        type: 'article',
        publishedTime: data.date,
        authors: ['0x4m4'],
        images: [
          {
            url: data.image || '/og-image.png', // Fallback to default OG image
            width: 1200,
            height: 630,
            alt: data.title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.title,
        description,
        creator: '@0x4m4',
        images: [data.image || '/og-image.png'], // Fallback to default OG image
      },
    }
  } catch (error) {
    return {
      title: 'Post Not Found | 0x4m4',
      description: 'The requested blog post could not be found.',
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