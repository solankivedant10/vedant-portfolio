import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getPostBySlug, getAllPosts } from '@/lib/blog-data'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <Button variant="ghost" asChild className="gap-2">
                    <Link href="/blog">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>

            <main className="pt-24 pb-20 px-6">
                <article className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            {post.title}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-6">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </header>

                    <Separator className="mb-12" />

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                        {post.content.split('\n\n').map((paragraph, index) => {
                            // Check if it's a heading (starts with emoji)
                            if (paragraph.match(/^[🚀🔍🧠🎯📈🧭⭐]/)) {
                                return (
                                    <h2 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                                        {paragraph}
                                    </h2>
                                )
                            }
                            // Check if it's a list (starts with bullet)
                            if (paragraph.includes('• ')) {
                                const items = paragraph.split('\n').filter(line => line.startsWith('• '))
                                return (
                                    <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                                        {items.map((item, i) => (
                                            <li key={i}>{item.replace('• ', '')}</li>
                                        ))}
                                    </ul>
                                )
                            }
                            // Regular paragraph
                            return (
                                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>

                    <Separator className="my-12" />

                    {/* Footer */}
                    <footer className="text-center">
                        <p className="text-muted-foreground mb-4">
                            Thanks for reading! Feel free to connect with me.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </footer>
                </article>
            </main>
        </div>
    )
}
