'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, ArrowRight, Sparkles } from 'lucide-react'
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
              <span className="gradient-text">Milad Shaddelan</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-4 px-4 sm:px-0">
              AI Researcher • Machine Learning Engineer • Theoretical Computer Scientist
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

      </main>
    </div>
  )
}