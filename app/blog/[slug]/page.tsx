import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'

const ARTICLES_DIR = path.join(process.cwd(), 'data', 'articles')

async function getArticle(slug: string) {
  try {
    const files = await fs.readdir(ARTICLES_DIR)
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue
      
      const filePath = path.join(ARTICLES_DIR, file)
      const content = await fs.readFile(filePath, 'utf-8')
      const { data, content: markdownContent } = matter(content)
      
      if (data.slug === slug && data.published) {
        const wordCount = markdownContent.split(/\s+/).length
        const readTime = `${Math.ceil(wordCount / 200)} min read`
        
        return {
          id: file.replace('.md', ''),
          title: data.title || 'Untitled',
          slug: data.slug || file.replace('.md', ''),
          excerpt: data.excerpt || '',
          content: markdownContent,
          date: data.date || new Date().toISOString(),
          published: data.published || false,
          views: data.views || 0,
          readTime,
        }
      }
    }
    
    return null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    await fs.access(ARTICLES_DIR)
    const files = await fs.readdir(ARTICLES_DIR)
    const params = []
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue
      
      const filePath = path.join(ARTICLES_DIR, file)
      const content = await fs.readFile(filePath, 'utf-8')
      const { data } = matter(content)
      
      if (data.published && data.slug) {
        params.push({ slug: data.slug })
      }
    }
    
    return params
  } catch {
    return []
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  
  if (!article) {
    notFound()
  }
  
  return <BlogPostClient article={article} />
}