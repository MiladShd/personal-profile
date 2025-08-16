'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Star, Search, Filter, Calendar, User, Quote, ArrowLeft, Sparkles } from 'lucide-react'

interface Book {
  id: string
  title: string
  subtitle?: string
  author: string
  rating: number
  cover: string
  review?: string
  dateRead: string
  goodreadsUrl: string
}

export default function BookshelfClient({ books: initialBooks }: { books: Book[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [hoveredBook, setHoveredBook] = useState<string | null>(null)

  const filteredBooks = useMemo(() => {
    return initialBooks.filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesRating = selectedRating === null || book.rating === selectedRating
      
      return matchesSearch && matchesRating
    })
  }, [initialBooks, searchTerm, selectedRating])

  const stats = useMemo(() => {
    const totalBooks = initialBooks.length
    const averageRating = initialBooks.reduce((sum, book) => sum + book.rating, 0) / totalBooks
    const fiveStarBooks = initialBooks.filter(book => book.rating === 5).length
    const booksWithReviews = initialBooks.filter(book => book.review).length
    
    return { totalBooks, averageRating, fiveStarBooks, booksWithReviews }
  }, [initialBooks])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-yellow-500 text-yellow-500' 
            : 'fill-gray-300 dark:fill-gray-600 text-gray-300 dark:text-gray-600'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 opacity-50"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Milad Shaddelan 🐈
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/" className="text-white/80 hover:text-white transition">
                Home
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white transition">
                Blog
              </Link>
              <Link href="/bookshelf" className="text-purple-400 font-medium">
                Bookshelf
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8"
            >
              <BookOpen className="w-4 h-4" />
              My Reading Journey
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              The <span className="gradient-text">Bookshelf</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              A collection of {stats.totalBooks} books that have shaped my thoughts, expanded my horizons, 
              and fueled my passion for learning. From science to philosophy, fiction to self-improvement.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-1">{stats.totalBooks}</div>
                <div className="text-sm text-white/60">Books Read</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {stats.averageRating.toFixed(1)}
                </div>
                <div className="text-sm text-white/60">Avg Rating</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">{stats.fiveStarBooks}</div>
                <div className="text-sm text-white/60">5-Star Books</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-3xl font-bold text-blue-400 mb-1">{stats.booksWithReviews}</div>
                <div className="text-sm text-white/60">With Reviews</div>
              </motion.div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or author..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                {[5, 4, 3, 2, 1, 0].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                    className={`px-4 py-3 rounded-lg border transition-all flex items-center gap-1 ${
                      selectedRating === rating
                        ? 'bg-purple-600 border-purple-600 text-white'
                        : 'bg-white/10 border-white/20 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {rating > 0 ? (
                      <>
                        {rating}
                        <Star className="w-4 h-4 fill-current" />
                      </>
                    ) : (
                      'Unrated'
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Books Grid */}
        <section className="container mx-auto px-4 sm:px-6 pb-20">
          {filteredBooks.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 text-lg">
                No books found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                  className="group relative"
                >
                  <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    book.rating === 5 
                      ? 'ring-2 ring-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                      : ''
                  } ${
                    hoveredBook === book.id 
                      ? 'transform scale-105 z-10' 
                      : ''
                  }`}>
                    {/* Book Cover */}
                    <div className="aspect-[2/3] relative bg-gray-800">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                        hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                            {book.title}
                          </h3>
                          {book.subtitle && (
                            <p className="text-white/70 text-xs mb-2 line-clamp-1">
                              {book.subtitle}
                            </p>
                          )}
                          <p className="text-white/60 text-xs mb-2">
                            by {book.author}
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            {renderStars(book.rating)}
                          </div>
                          {book.review && (
                            <div className="text-white/70 text-xs line-clamp-3 italic mb-2">
                              "{book.review}"
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-white/50 text-xs">
                            <Calendar className="w-3 h-3" />
                            {new Date(book.dateRead).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric'
                            })}
                          </div>
                          <a
                            href={book.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/80 text-xs hover:bg-white/30 transition"
                          >
                            View on Goodreads →
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating Badge for 5-star books */}
                    {book.rating === 5 && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Book Info Below Cover */}
                  <div className="mt-3">
                    <h3 className="text-white text-sm font-medium line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-1">
                      {book.author}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}