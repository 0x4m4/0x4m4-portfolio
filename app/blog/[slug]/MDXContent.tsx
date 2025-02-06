"use client"

import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Image from 'next/image'
import { useEffect } from 'react'
import mermaid from 'mermaid'

// Initialize mermaid
if (typeof window !== 'undefined') {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    themeVariables: {
      primaryColor: '#ef4444',
      primaryTextColor: '#fff',
      primaryBorderColor: '#ef4444',
      lineColor: '#ef4444',
      secondaryColor: '#fb7185',
      tertiaryColor: '#fecdd3',
    }
  })
}

// Custom components for MDX
const components = {
  pre: ({ children, ...props }: any) => {
    // Get the child code element
    const codeElement = children as React.ReactElement
    
    // Extract language and filename from className
    const match = codeElement?.props?.className?.match(/language-(\w+)(?::|$)(.*)/)
    const language = match?.[1] || ''
    const filename = match?.[2]?.trim() || language
    
    // Handle Mermaid diagrams
    if (language === 'mermaid') {
      return (
        <div className="mermaid my-6">
          {codeElement.props.children}
        </div>
      )
    }

    return (
      <pre data-filename={filename || undefined} className={codeElement?.props?.className}>
        {codeElement}
      </pre>
    )
  },
  
  code: ({ children, className, ...props }: any) => {
    // Extract filename from className if present
    const [lang, ...filenameParts] = (className || '').replace('language-', '').split(':')
    const filename = filenameParts.join(':')
    
    return (
      <code {...props} className={className}>
        {children}
      </code>
    )
  },
  
  img: (props: any) => (
    <figure className="my-6">
      <div className="relative w-full max-w-2xl">
        <Image
          src={props.src}
          alt={props.alt || "Blog image"}
          width={700}
          height={500}
          className="object-contain w-full h-auto"
          quality={100}
        />
      </div>
      {props.alt && (
        <figcaption className="text-red-400/70 text-sm mt-2 font-mono">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),

  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-red-500/20" {...props} />
    </div>
  ),
}

export default function MDXContent({ content }: { content: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      mermaid.contentLoaded()
    }
  }, [content])

  return (
    <div className="mdx-wrapper">
      <MDXRemote 
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              remarkMath
            ],
            rehypePlugins: [
              [rehypeHighlight, { ignoreMissing: true }],
              rehypeKatex
            ],
          },
        }}
      />
    </div>
  )
} 