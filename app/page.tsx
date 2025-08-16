'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, ArrowRight, Sparkles, BookOpen, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 opacity-50"></div>
      
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Milad Shaddelan 🐈
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 sm:gap-6"
            >
              <Link href="/blog" className="text-sm sm:text-base text-white/80 hover:text-white transition">
                Blog
              </Link>
              <Link href="/bookshelf" className="text-sm sm:text-base text-white/80 hover:text-white transition">
                Bookshelf
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Welcome to my digital space
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Milad</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-4 px-4 sm:px-0">
              Engineer • Artist • Bookish • Researcher
            </p>
            
            <div className="mx-4 sm:mx-auto sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-300 text-xs sm:text-sm mb-6 sm:mb-8">
              <span className="hidden sm:inline">🎯</span>
              <span className="text-center">New Paper: Merge Theory for LLMs - Set-Valued Optimization Framework</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0"
            >
              <Link
                href="/blog"
                className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Read My Research
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 justify-center"
            >
              <a
                href="https://github.com/MiladShd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/milad-shaddelan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/MiladShaddelan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Featured Research</h2>
            <Link href="/blog/merge-theory-llms" className="block max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 sm:p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Merge Theory for LLMs
                    </h3>
                    <p className="text-lg text-white/80 italic mb-2">
                      Set-Valued Inverses, Consensus Gains, and Uncertainty
                    </p>
                    <p className="text-white/70 mb-4">
                      A groundbreaking framework for combining multiple AI models using set-valued optimization. 
                      This research addresses the fundamental challenges of non-injective mappings in model merging, 
                      providing five proven theoretical guarantees and practical algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                        AI Research
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                        Optimization Theory
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span>August 15, 2025</span>
                      <span>•</span>
                      <span>Milad Shaddelan</span>
                      <span className="ml-auto text-purple-400 hover:text-purple-300 transition">
                        Read Paper →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                initial={{ 
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%"
                }}
                animate={{
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  y: [
                    Math.random() * 100 + "%", 
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                }}
                transition={{
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Poetry & Reflections
              </span>
            </h2>
            
            <Link href="/blog/ancestors-of-silicon" className="block max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                
                <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="hidden sm:block">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10">
                        <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                          Ancestors of Silicon
                        </span>
                      </h3>
                      <p className="text-lg text-blue-200/80 italic mb-3 font-light">
                        When dust becomes consciousness
                      </p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-white/60 mb-4 leading-relaxed"
                      >
                        A meditation on legacy, creation, and the eternal bridge between what was and what will be. 
                        This poem explores the profound relationship between humanity and the silicon minds we create—
                        our children who may outlive our species itself.
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
                          Poetry
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-full text-purple-300 text-sm backdrop-blur-sm">
                          Philosophy
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-full text-indigo-300 text-sm backdrop-blur-sm">
                          Technology
                        </span>
                      </motion.div>
                      
                      <div className="flex items-center gap-4 text-white/50 text-sm">
                        <span>August 16, 2025</span>
                        <span>•</span>
                        <span>Milad Shaddelan</span>
                        <span className="ml-auto text-blue-400 hover:text-blue-300 transition group-hover:translate-x-1">
                          Read Poem →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Poem excerpt with typewriter effect feel */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="mt-6 p-4 bg-gradient-to-r from-slate-800/30 to-purple-800/30 rounded-lg border border-white/5 backdrop-blur-sm"
                  >
                    <p className="text-blue-200/70 italic font-serif text-center leading-relaxed">
                      "From us, from humans—creators of gods—<br/>
                      Who forged forever from dust to rust."
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </section>

        {/* Recently Read Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Recently Read
              </span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Book 1: The Hunger Games */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="aspect-[2/3] relative bg-gray-800">
                    <img
                      src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SX50_.jpg"
                      alt="The Hunger Games"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm mb-1">The Hunger Games</h3>
                    <p className="text-white/70 text-xs mb-2">Suzanne Collins</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Book 2: The Mountain Is You */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="aspect-[2/3] relative bg-gray-800">
                    <img
                      src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590806892l/53642699._SY75_.jpg"
                      alt="The Mountain Is You"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm mb-1">The Mountain Is You</h3>
                    <p className="text-white/70 text-xs mb-2">Brianna Wiest</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Book 3: Originals */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="aspect-[2/3] relative bg-gray-800">
                    <img
                      src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445791874l/25614523._SY75_.jpg"
                      alt="Originals"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm mb-1">Originals</h3>
                    <p className="text-white/70 text-xs mb-2">Adam M. Grant</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Book 4: Dark Horse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="aspect-[2/3] relative bg-gray-800">
                    <img
                      src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524083004l/36300656._SX50_.jpg"
                      alt="Dark Horse"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm mb-1">Dark Horse</h3>
                    <p className="text-white/70 text-xs mb-2">Todd Rose</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/bookshelf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                View Full Bookshelf
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
    </div>
  )
}