'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
    {
        id: 1,
        title: "SneakOut",
        tagline: "Discover hidden gems in your city",
        description: "A hyperlocal spot discovery platform where users crowdsource and explore nearby hangout locations. Search by category, proximity, or community ratings.",
        technologies: ["React", "Node.js", "MongoDB", "Leaflet.js", "JWT"],
        category: "Full Stack",
        website: "https://sneakout.me",
        source: "https://github.com/ANIKETHPAWAR/SneakOut",
        featured: true,
    },
    {
        id: 2,
        title: "SangbadBangla",
        tagline: "Regional news platform",
        description: "Dynamic Bengali news website serving thousands of readers with live cricket scores, breaking news, and an admin dashboard for content management.",
        technologies: ["React", "Node.js", "Firebase", "Auth0"],
        category: "Full Stack",
        website: "https://sangbadbangla.news",
        source: "https://github.com/ANIKETHPAWAR/Sangbad-bangla",
        featured: true,
    },
    {
        id: 3,
        title: "Voting App",
        tagline: "Secure election system",
        description: "Real-time voting application with Aadhar-based authentication. Users can vote for candidates and view live vote counts as they update.",
        technologies: ["Node.js", "Express", "MongoDB"],
        category: "Backend",
        website: "https://github.com/ANIKETHPAWAR/Voting-App",
        source: "https://github.com/ANIKETHPAWAR/Voting-App",
        featured: true,
    },
    {
        id: 5,
        title: "Routemate",
        tagline: "Landing Page",
        description: "A website to connect solo travelers across the world.",
        technologies: ["JavaScript", "TailwindCSS", "ReactJs", "Framer Motion"],
        category: "Frontend",
        website: "https://route-mate-sage.vercel.app",
        source: "https://github.com/ANIKETHPAWAR/RouteMate",
        featured: true,
    },
    {
        id: 6,
        title: "Brainly",
        tagline: "Resource vault",
        description: "Build your personal knowledge hub — save tutorials, articles, and resources that matter.",
        technologies: ["JavaScript", "TailwindCSS", "ReactJs", "MongoDB"],
        category: "Fullstack",
        website: "https://brainly-alpha-nine.vercel.app/",
        source: "https://github.com/ANIKETHPAWAR/Brainly",
        featured: true,
    },
    {
        id: 8,
        title: "Tea-station",
        tagline: "Tea Cafe",
        description: "Over one hundred flavours of specially crafted tea.",
        technologies: ["Html", "Css", "Javascript"],
        category: "Frontend",
        website: "https://tea-station-aniketh-pawar.netlify.app/",
        source: "https://github.com/ANIKETHPAWAR/tea-station-website",
        featured: true,
    }
]

interface ProjectCardProps {
    project: typeof projects[0]
    index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Card className="h-full bg-card border-border hover:border-foreground/20 transition-colors group">
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.tagline}</p>
                        </div>
                        <div className="flex gap-2">
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pb-3">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </CardContent>

                <CardFooter>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export function Projects() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Featured <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg">
                        A selection of projects I&apos;ve built. Each one taught me something new.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-center"
                >
                    <Button variant="outline" asChild className="gap-2 group">
                        <a
                            href="https://github.com/ANIKETHPAWAR"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View all projects on GitHub
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
