import { getAllPosts } from '@/lib/posts'
import BlogList from './components/BlogList'
import Link from 'next/link'
import { Terminal, Home } from 'lucide-react'
import { PostMetadata } from '@/types/post'

// Mark as server component
export const dynamic = 'force-dynamic'

const POSTS_PER_PAGE = 10

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; tag?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const currentTag = searchParams.tag || ''
  const allPosts = getAllPosts() as PostMetadata[]
  
  // Filter posts by tag first
  const tagFilteredPosts = currentTag
    ? allPosts.filter(post => post.tags?.includes(currentTag))
    : allPosts
  
  // Calculate total pages based on filtered posts
  const totalPages = Math.ceil(tagFilteredPosts.length / POSTS_PER_PAGE)
  
  // Get posts for current page from filtered posts
  const paginatedPosts = tagFilteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <nav className="flex items-center gap-2 text-red-400/80 mb-8">
          <Link href="/" className="hover:text-red-400 transition-colors">
            <Home className="w-5 h-5" />
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-red-400 transition-colors flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            blog
          </Link>
        </nav>

        <BlogList 
          initialPosts={paginatedPosts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
} 