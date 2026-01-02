'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Rocket, Zap, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const currentProjects = [
    {
        id: 1,
        title: "Cloud Janitor (FinOps)",
        description: "Autonomous AI agent that detects wasted cloud resources and proposes safe Terraform cleanup code with human-in-the-loop validation.",
        status: "Completed",
        progress: 100,
        technologies: ["Kestra", "Gemini 2.5 Pro", "Terraform", "Next.js", "Cline", "Vercel"],
        link: "https://github.com/solankivedant10/FinOps-Agent"
    },
    {
        id: 2,
        title: "SensAI Career Coach",
        description: "Full-stack AI platform offering resume analysis and career guidance. Features an event-driven architecture.",
        status: "Completed",
        progress: 100,
        technologies: ["Next.js", "Neon DB", "Prisma", "Inngest", "Vercel"],
        link: "https://github.com/solankivedant10/SensAI"
    },
    {
        id: 3,
        title: "RAG Resume Analyzer",
        description: "Cost-effective document analysis tool using local embeddings to chat with PDFs without hitting API rate limits.",
        status: "Completed",
        progress: 100,
        technologies: ["Streamlit", "LlamaIndex", "Gemini", "Python"],
        link: "https://github.com/solankivedant10/rag-resume-analyzer"
    },
    {
        id: 4,
        title: "Talent Recommender",
        description: "Semantic search engine matching candidates to jobs. Uses LLMs to explain 'Why this match?' to recruiters.",
        status: "Completed",
        progress: 100,
        technologies: ["FastAPI", "React", "Sentence Transformers", "Vector Search"],
        link: "https://github.com/solankivedant10/Talent-Recommender-LLM"
    },
    {
        id: 5,
        title: "Portfolio V2",
        description: "My personal digital garden. Redesigned with a focus on clean UI, smooth animations, and better UX.",
        status: "Almost Done",
        progress: 90,
        technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        link: "https://github.com/solankivedant10/vedant-portfolio"
    },
    {
        id: 6,
        title: "IPL Win Predictor",
        description: "Real-time sports analytics tool predicting match outcomes based on live score, wickets, and venue data.",
        status: "Completed",
        progress: 100,
        technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
        link: "https://github.com/solankivedant10/IPL-win_predictor"
    }
]

const experiments = [
    "Mastering Full Stack Architecture & Scalability",
    "Grinding Data Structures and Algorithms (DSA)",
    "Exploring Autonomous Agents & RAG Pipelines",
]

const learningItems = [
    {
        id: 1,
        title: "Data Structures & Algorithms",
        description: "Sharpening problem-solving skills and mastering complexity analysis for technical interviews.",
        icon: "🧩",
        resources: ["LeetCode", "NeetCode 150", "Cracking the Coding Interview"]
    },
    {
        id: 2,
        title: "Full Stack Engineering",
        description: "Building scalable web applications with modern frameworks, serverless architecture, and robust databases.",
        icon: "💻",
        resources: ["Next.js Docs", "PostgreSQL", "System Design Patterns"]
    },
    {
        id: 3,
        title: "Autonomous Agents & RAG",
        description: "Exploring LLM orchestration, vector databases, and agentic workflows.",
        icon: "🤖",
        resources: ["LangChain", "LlamaIndex", "DeepLearning.ai"]
    },
]

export default function GarageContent() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <div className="min-h-screen">
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                🔧 The Garage
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            What I&apos;m <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Building</span>
                        </h1>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            A peek into my current projects, experiments, and learning journey.
                            Always tinkering, always shipping.
                        </p>
                    </motion.div>

                    {/* Glowing Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProjects.map((project) => (
                            <div key={project.id} className="relative h-full rounded-2xl p-0.5">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative flex flex-col justify-between h-full rounded-[inherit] bg-background p-6 overflow-hidden">
                                    {/* Content */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Rocket className="w-5 h-5 text-indigo-400" />
                                                <span className="text-sm font-medium text-muted-foreground">Project</span>
                                            </div>
                                            <Badge
                                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                                className={
                                                    project.status === 'Completed'
                                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                        : project.status === 'Almost Done'
                                                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                                }
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mb-4 space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-muted-foreground">Progress</span>
                                                <span className="text-foreground">{project.progress}%</span>
                                            </div>
                                            <Progress value={project.progress} className="h-1.5" />
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs bg-background/50">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Experiments Card */}
                        <div className="relative h-full rounded-2xl p-0.5 md:col-span-2 lg:col-span-1">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                variant="white"
                            />
                            <div className="relative h-full rounded-[inherit] bg-background p-6 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="w-5 h-5 text-yellow-500" />
                                    <h3 className="font-bold text-foreground">Experiments</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {experiments.map((exp, index) => (
                                        <Badge key={index} variant="secondary" className="text-sm py-1.5">
                                            {exp}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Section */}
                    <div className="mt-16">
                        <div className="flex items-center gap-2 mb-8 justify-center">
                            <BookOpen className="w-5 h-5 text-muted-foreground" />
                            <h2 className="text-3xl font-bold">Currently I&apos;m learning!</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {learningItems.map((item) => (
                                <div key={item.id} className="border border-border/50 bg-secondary/20 rounded-xl p-6 hover:border-border transition-colors">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.resources.map(res => (
                                            <Badge key={res} variant="outline" className="text-xs bg-background">{res}</Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}