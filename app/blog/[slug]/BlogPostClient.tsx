'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Download, FileText, BookOpen, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  published: boolean
  views: number
  readTime?: string
  author?: string
  tags?: string[]
  image?: string
  subtitle?: string
}

export default function BlogPostClient({ article }: { article: Article }) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shareOnTwitter = () => {
    const url = window.location.href
    const text = `Check out this article: ${article.title}`
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
  }

  const isMergeTheoryPost = article.slug === 'merge-theory-llms'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky header with minimize on scroll for Merge Theory */}
      {isMergeTheoryPost && (
        <div className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-0 translate-y-[-100%]'
        }`}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Merge Theory for LLMs</h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Milad Shaddelan • DOI: 10.5281/zenodo.16884687</p>
                </div>
              </div>
              <a
                href="/personal-profile/merge-theory-llms.pdf"
                download="Shaddelan-2025-Merge-Theory-LLMs.pdf"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
      
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Milad Shaddelan 🐈
            </Link>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <Link href="/" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
                Home
              </Link>
              <Link href="/blog" className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                Blog
              </Link>
              <Link href="/bookshelf" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
                Bookshelf
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={isMergeTheoryPost ? "max-w-6xl mx-auto" : "max-w-4xl mx-auto"}
        >
          {/* Back button and Download button row */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            
            {isMergeTheoryPost && (
              <a
                href="/personal-profile/merge-theory-llms.pdf"
                download="Shaddelan-2025-Merge-Theory-LLMs.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            )}
          </div>

          {/* Academic Paper Header for Merge Theory */}
          {isMergeTheoryPost ? (
            <header className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {article.title}
                </h1>
                {article.subtitle && (
                  <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-4">
                    {article.subtitle}
                  </p>
                )}
                
                <div className="text-base text-gray-700 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Milad Shaddelan</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  milad.shaddelan@gmail.com
                </div>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    August 15, 2025
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    DOI: 10.5281/zenodo.16884687
                  </span>
                </div>
              </div>
              
              {/* Abstract Section */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mt-4">
                <h2 className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300 mb-2">Abstract</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {article.excerpt}
                </p>
              </div>
              
              {/* Keywords */}
              {article.tags && (
                <div className="mt-6">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 mr-2">Keywords:</span>
                  <div className="inline-flex flex-wrap gap-2 mt-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </header>
          ) : (
            <header className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  {article.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </header>
          )}

          {/* Content Area with Academic Styling for Merge Theory */}
          <div className={isMergeTheoryPost ? 
            "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700" : 
            ""
          }>
            <div className={isMergeTheoryPost ? 
              "prose prose-lg dark:prose-invert max-w-none academic-prose" : 
              "prose prose-lg dark:prose-invert max-w-none"
            }>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  code({node, inline, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          padding: '1.5rem',
                          margin: '1.5rem 0',
                          backgroundColor: '#1e1e1e !important',
                          border: '1px solid #333',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                        }}
                        codeTagProps={{
                          style: {
                            backgroundColor: '#1e1e1e',
                            color: '#d4d4d4',
                          }
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                More articles
              </Link>
              
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Share2 className="w-4 h-4" />
                Share this article
              </div>
            </div>
          </footer>
        </motion.article>
      </main>
    </div>
  )
}