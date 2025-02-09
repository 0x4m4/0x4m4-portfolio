import Link from 'next/link'
import { HomeIcon, Terminal } from 'lucide-react'

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-500 font-mono">404 - Post Not Found</h2>
        <p className="text-red-400/80 font-mono">Could not find the requested blog post.</p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-mono"
          >
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-mono"
          >
            <Terminal className="w-5 h-5" />
            Blog
          </Link>
        </div>
      </div>
    </div>
  )
} 