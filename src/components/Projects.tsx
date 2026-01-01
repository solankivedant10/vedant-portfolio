'use client'

import { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
    {
        id: 1,
        title: "Cloud Janitor (FinOps)",
        tagline: "Autonomous Infrastructure Agent",
        description: "An AI agent that detects wasted cloud resources and proposes safe Terraform cleanup code. Features a human-in-the-loop approval workflow to ensure safety before destruction.",
        technologies: ["Next.js", "Gemini 1.5 Pro", "Kestra", "Terraform"],
        category: "Full Stack",
        website: "https://cloud-janitor-finops.vercel.app",
        source: "https://github.com/solankivedant10/FinOps-Agent",
        featured: true,
    },
    {
        id: 2,
        title: "SensAI Career Coach",
        tagline: "AI-Powered Career Platform",
        description: "Full-stack platform offering resume analysis and career guidance. Built with an event-driven architecture using Inngest to handle complex AI workflows asynchronously.",
        technologies: ["Next.js", "Neon DB", "Prisma", "Inngest"],
        category: "Full Stack",
        website: "#", // Add live link if available
        source: "https://github.com/solankivedant10/SensAI",
        featured: true,
    },
    {
        id: 3,
        title: "RAG Resume Analyzer",
        tagline: "Cost-Effective Document AI",
        description: "A tool using local embeddings (BAAI/bge-small) to chat with PDFs without hitting API rate limits, with Gemini handling the reasoning layer.",
        technologies: ["Streamlit", "LlamaIndex", "Gemini API", "Python"],
        category: "AI / ML",
        website: "#",
        source: "https://github.com/solankivedant10/rag-resume-analyzer",
        featured: true,
    },
    {
        id: 4,
        title: "Talent Recommender",
        tagline: "Semantic Job Matching",
        description: "Semantic search engine that matches candidates to job postings. Uses vector embeddings to understand context and LLMs to generate 'Why this match?' explanations.",
        technologies: ["FastAPI", "React", "Vector Search", "Python"],
        category: "AI / ML",
        website: "#",
        source: "https://github.com/solankivedant10/Talent-Recommender-LLM",
        featured: true,
    },
    {
        id: 5,
        title: "IPL Win Predictor",
        tagline: "Real-Time Sports Analytics",
        description: "Predicts the winning probability of an IPL team during a live match based on current score, wickets, and venue statistics.",
        technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
        category: "Data Science",
        website: "#",
        source: "https://github.com/solankivedant10/IPL-win_predictor",
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
            <Card className="h-full bg-card border-border hover:border-foreground/20 transition-colors group flex flex-col">
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{project.tagline}</p>
                        </div>
                        <div className="flex gap-2">
                            {project.website !== "#" && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
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

                <CardContent className="pb-3 grow">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </CardContent>

                <CardFooter className="mt-auto">
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
                            href="https://github.com/solankivedant10"
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