"use client"

import { Terminal, HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

// Import MDXContent with no SSR
const MDXContent = dynamic(() => import('./MDXContent'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-red-500/10 rounded w-3/4"></div>
      <div className="h-4 bg-red-500/10 rounded"></div>
      <div className="h-4 bg-red-500/10 rounded w-5/6"></div>
    </div>
  )
})

export default function BlogPostContent({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/${params.slug}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch post')
        }

        setPost(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post')
        router.push('/blog') // Redirect to blog index instead of 404
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-red-500/10 rounded w-1/2"></div>
            <div className="space-y-4">
              <div className="h-4 bg-red-500/10 rounded w-3/4"></div>
              <div className="h-4 bg-red-500/10 rounded"></div>
              <div className="h-4 bg-red-500/10 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-red-500 font-mono">Error Loading Post</h2>
          <p className="text-red-400/80 font-mono">{error}</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-mono"
          >
            <HomeIcon className="w-5 h-5" />
            Return to Blog
          </Link>
        </div>
      </div>
    )
  }

  if (!post || !post.data) {
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation with icons */}
          <nav className="mb-12">
            <div className="flex items-center gap-2 text-red-400/80 font-mono">
              <Link href="/" className="hover:text-red-400 transition-colors inline-flex items-center gap-1">
                <HomeIcon className="w-4 h-4" />~/home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-red-400 transition-colors inline-flex items-center gap-1">
                <Terminal className="w-4 h-4" />blog
              </Link>
              <span>/</span>
              <span className="text-red-400">{params.slug}</span>
            </div>
          </nav>

          {/* Post Header */}
          <header className="mb-12 space-y-4">
            <h1 className="text-4xl font-bold text-red-300">{post.data.title}</h1>
            {post.data.description && (
              <p className="text-lg text-red-400/80">{post.data.description}</p>
            )}
            
            {/* Tags */}
            {post.data.tags && post.data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.data.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-red-500/10 rounded-full text-red-400/80 hover:text-red-400 hover:bg-red-500/20 transition-colors font-mono text-sm"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Date */}
            {post.data.date && (
              <time className="block text-red-400/60 text-sm">
                {new Date(post.data.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
              </time>
            )}
          </header>

          {/* Post Content */}
          <article className="prose prose-invert prose-red max-w-none">
            <MDXContent content={post.content} />
          </article>
        </div>
      </div>
    </div>
  )
} 