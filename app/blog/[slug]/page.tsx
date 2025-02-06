"use client"

import { Terminal, Home } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'

// Import MDXContent with no SSR
const MDXContent = dynamic(() => import('./MDXContent'), {
  ssr: false,
  loading: () => <div className="text-red-500/60 font-mono">Loading content...</div>
})

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch(`/api/posts/${params.slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found')
        return res.json()
      })
      .then(data => {
        if (!data || !data.data) throw new Error('Invalid post data')
        setPost(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching post:', error)
        setLoading(false)
        setError(true)
        router.push('/404')
      })
  }, [params.slug, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-red-500/80 flex items-center justify-center">
        <span className="font-mono">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-500/80 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-mono">Post Not Found</h1>
          <Link href="/blog" className="text-red-500 hover:text-red-400 transition-colors">
            Return to Blog
          </Link>
        </div>
      </div>
    )
  }

  if (!post || !post.data) {
    return (
      <div className="min-h-screen bg-black text-red-500/80 flex items-center justify-center">
        <span className="font-mono">Post not found</span>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black overflow-y-auto">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-red-500/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Navigation */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-red-500/60 hover:text-red-500/100 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-mono">~/home</span>
              </Link>
              <span className="text-red-500/60">/</span>
              <Link 
                href="/blog" 
                className="flex items-center gap-2 text-red-500/60 hover:text-red-500/100 transition-colors"
              >
                <Terminal className="w-5 h-5" />
                <span className="font-mono">blog</span>
              </Link>
              <span className="text-red-500/60">/</span>
              <span className="font-mono text-red-500/80">{params.slug}</span>
            </div>

            {/* Post Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-red-300 font-mono">
                {post.data.title}
              </h1>
              
              {post.data.description && (
                <p className="text-lg text-red-400/80 font-mono">
                  {post.data.description}
                </p>
              )}

              {post.data.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.data.tags.map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="px-3 py-1 rounded-full border border-red-500/20 text-red-500/60 hover:border-red-500/40 font-mono text-sm"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}

              {post.data.date && (
                <time className="block text-red-500/60 text-sm font-mono">
                  {new Date(post.data.date).toLocaleDateString()}
                </time>
              )}
            </div>
          </div>

          {/* Article content - align left */}
          <article className="prose prose-invert prose-red max-w-none lg:ml-0 lg:mr-auto">
            <MDXContent content={post.content} />
          </article>
        </div>
      </div>
    </div>
  )
} 