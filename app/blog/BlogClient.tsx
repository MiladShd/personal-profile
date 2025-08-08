'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  published: boolean
  views: number
  readTime?: string
}

export default function BlogClient({ articles: initialArticles }: { articles: Article[] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredArticles = initialArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
              Milad
            </Link>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <Link href="/" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
                Home
              </Link>
              <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
                About
              </Link>
              <Link href="/blog" className="text-sm sm:text-base text-purple-600 dark:text-purple-400 font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">
            Thoughts, ideas, and insights on technology and development
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </motion.div>

        {filteredArticles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {searchTerm ? 'No articles found matching your search.' : 'No articles published yet.'}
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
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
                    
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}