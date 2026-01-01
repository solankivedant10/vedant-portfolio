import { Metadata } from 'next'
import BlogContent from './content'

export const metadata: Metadata = {
    title: "Blog | Vedant Solanki",
    description: "Thoughts on software engineering, career growth, and web technologies."
}

export default function BlogPage() {
    return <BlogContent />
}
