'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PostMetadata } from '@/types/post'
import { useSearchParams, useRouter } from 'next/navigation'

interface BlogListProps {
  initialPosts: PostMetadata[]
  currentPage: number
  totalPages: number
}

export default function BlogList({ initialPosts, currentPage, totalPages }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()
  const urlTag = searchParams.get('tag')
  const [selectedTag, setSelectedTag] = useState(urlTag || '')

  // Get unique tags from all posts
  const allTags = Array.from(new Set(initialPosts.flatMap(post => post.tags || [])))

  // Filter posts based on search and tag
  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    const newTag = tag === selectedTag ? '' : tag
    setSelectedTag(newTag)
    router.push(newTag ? `/blog?tag=${newTag}` : '/blog')
  }

  // Update selected tag when URL parameter changes
  useEffect(() => {
    setSelectedTag(urlTag || '')
  }, [urlTag])

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 bg-red-950/20 border border-red-500/20 rounded-lg text-red-200 mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleTagClick('')}
          className={`px-3 py-1 rounded-full text-sm ${
            !selectedTag ? 'bg-red-500 text-white' : 'bg-red-950/20 text-red-400 hover:bg-red-500/5'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag ? 'bg-red-500 text-white' : 'bg-red-950/20 text-red-400 hover:bg-red-500/5'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Posts list */}
      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block border border-red-500/20 rounded-lg p-6 hover:bg-red-500/5 transition-colors"
          >
            <h2 className="text-red-500 text-xl font-mono mb-2">{post.title}</h2>
            <div className="text-red-300/60 text-sm mb-4">{post.date}</div>
            {post.description && (
              <p className="text-red-400/80 mb-4">{post.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-red-400/60 bg-red-500/10 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/5 transition-colors"
            >
              Previous
            </Link>
          )}
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/blog?page=${pageNum}`}
                className={`w-8 h-8 flex items-center justify-center rounded-lg
                  ${pageNum === currentPage 
                    ? 'bg-red-500 text-white' 
                    : 'text-red-400 hover:bg-red-500/5 border border-red-500/20'
                  }`}
              >
                {pageNum}
              </Link>
            ))}
          </div>

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/5 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  )
} 