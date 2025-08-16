import fs from 'fs/promises'
import path from 'path'
import BookshelfClient from './BookshelfClient'

const BOOKS_FILE = path.join(process.cwd(), 'data', 'books.json')

async function getBooks() {
  try {
    const content = await fs.readFile(BOOKS_FILE, 'utf-8')
    const data = JSON.parse(content)
    return data.books || []
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

export default async function BookshelfPage() {
  const books = await getBooks()
  
  return <BookshelfClient books={books} />
}