import { getAllPosts } from '@/lib/posts'
import { MetadataRoute } from 'next'
import { PostMetadata } from '@/types/post'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts() as PostMetadata[]
  const baseUrl = 'https://0x4m4.com'

  const blogPosts = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogPosts,
  ]
} 