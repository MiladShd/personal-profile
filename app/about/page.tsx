'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, Code2, Database, Globe, Smartphone } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
    { name: 'Design', items: ['Figma', 'UI/UX', 'Responsive Design', 'Animation'] },
  ]

  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Startup Inc',
      period: '2019 - 2021',
      description: 'Built and maintained multiple client projects using modern web technologies.',
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2017 - 2019',
      description: 'Created responsive and interactive user interfaces for various clients.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 opacity-50"></div>
      
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
              Milad
            </Link>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <Link href="/" className="text-sm sm:text-base text-white/80 hover:text-white transition">
                Home
              </Link>
              <Link href="/blog" className="text-sm sm:text-base text-white/80 hover:text-white transition">
                Blog
              </Link>
              <Link href="/about" className="text-sm sm:text-base text-white font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-4 px-4 sm:px-0">
              Passionate about creating exceptional digital experiences
            </p>
            <div className="mx-4 sm:mx-auto sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full text-yellow-300 text-xs sm:text-sm">
              <span className="hidden sm:inline">⚠️</span>
              <span>Template content - AI-generated for demonstration</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
                <p className="text-white/80 mb-4">
                  I'm a passionate full-stack developer with over 6 years of experience in building 
                  web applications. I love turning complex problems into simple, beautiful, and 
                  intuitive solutions.
                </p>
                <p className="text-white/80 mb-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
                <p className="text-white/80">
                  I believe in continuous learning and staying up-to-date with the latest trends 
                  in web development to deliver cutting-edge solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Web Development</h3>
                      <p className="text-white/70 text-sm">
                        Building responsive and performant web applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Mobile-First Design</h3>
                      <p className="text-white/70 text-sm">
                        Creating seamless experiences across all devices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Backend Development</h3>
                      <p className="text-white/70 text-sm">
                        Designing scalable APIs and database architectures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Clean Code</h3>
                      <p className="text-white/70 text-sm">
                        Writing maintainable and well-documented code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Skills & Technologies</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {skills.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-white/70 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="text-purple-400">{job.company}</p>
                    </div>
                    <span className="text-white/60 text-sm">{job.period}</span>
                  </div>
                  <p className="text-white/70">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-white/70 mb-8">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}