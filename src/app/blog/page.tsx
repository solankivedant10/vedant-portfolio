'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getAllPosts, hasPosts } from '@/lib/blog-data'

export default function BlogPage() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const posts = getAllPosts()
    const hasAnyPosts = hasPosts()

    return (
        <div className="min-h-screen">
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Writing
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Blog
                        </h1>
                        <p className="text-muted-foreground max-w-lg">
                            Thoughts on code, career, and the journey of building things.
                        </p>
                    </motion.div>

                    {/* Posts Grid */}
                    {hasAnyPosts ? (
                        <div className="space-y-6">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <Card className="hover:border-foreground/20 transition-colors group cursor-pointer">
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                            {post.title}
                                                        </h2>
                                                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-3.5 h-3.5" />
                                                                {post.date}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="w-3.5 h-3.5" />
                                                                {post.readTime}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="flex flex-wrap gap-2">
                                                    {post.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✍️</span>
                            </div>
                            <h3 className="text-lg font-medium text-foreground mb-2">
                                Coming Soon
                            </h3>
                            <p className="text-muted-foreground">
                                I&apos;m working on some posts. Check back soon!
                            </p>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    )
}
