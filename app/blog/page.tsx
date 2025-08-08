import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import BlogClient from './BlogClient'

const ARTICLES_DIR = path.join(process.cwd(), 'data', 'articles')

async function getArticles() {
  try {
    await fs.access(ARTICLES_DIR)
    const files = await fs.readdir(ARTICLES_DIR)
    const articles = await Promise.all(
      files
        .filter(file => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = path.join(ARTICLES_DIR, file)
          const content = await fs.readFile(filePath, 'utf-8')
          const { data } = matter(content)
          
          if (!data.published) return null
          
          return {
            id: file.replace('.md', ''),
            title: data.title || 'Untitled',
            slug: data.slug || file.replace('.md', ''),
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            published: data.published || false,
            views: data.views || 0,
          }
        })
    )
    
    return articles
      .filter(Boolean)
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as any[]
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export default async function BlogPage() {
  const articles = await getArticles()
  
  return <BlogClient articles={articles} />
}