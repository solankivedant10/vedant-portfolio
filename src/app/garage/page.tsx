'use client'

import { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import { ExternalLink, BookOpen, Rocket, Zap } from 'lucide-react'

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const currentProjects = [
    {
        id: 1,
        title: "AI-Powered Blog Creation",
        description: "Transform your ideas into compelling articles in seconds. Professional content creation powered by advanced AI.",
        status: "In Progress",
        progress: 50,
        technologies: ["React.js", "OpenAI API", "TailwindCSS", "ShadCN UI"],
        startDate: "Dec 2025",
        link: "https://draft-iq.vercel.app/"
    },
    {
        id: 2,
        title: "Portfolio V2",
        description: "Redesigning my portfolio with improved animations and better UX.",
        status: "Almost Done",
        progress: 85,
        technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
        startDate: "Dec 2025",
        link: "https://aniketh.xyz"
    },
    {
        id: 3,
        title: "Route Mate",
        description: "Connect with verified travelers heading your way. Share rides, split costs, and make your solo journey safer.",
        status: "In Progress",
        progress: 50,
        technologies: ["React", "Framer Motion", "Tailwind"],
        startDate: "Dec 2025",
        link: "https://route-mate-sage.vercel.app"
    }
]

const learningItems = [
    {
        id: 1,
        title: "System Design",
        description: "Deep diving into distributed systems, scalability patterns, and architecture decisions.",
        icon: "🏗️",
        resources: ["Designing Data-Intensive Applications", "System Design Interview"]
    },
    {
        id: 2,
        title: "DevOps & Infrastructure",
        description: "Learning Docker, Kubernetes, and cloud deployment strategies.",
        icon: "☁️",
        resources: ["AWS", "Docker", "CI/CD pipelines"]
    },
    {
        id: 3,
        title: "TypeScript Advanced Patterns",
        description: "Mastering type-level programming and advanced TypeScript patterns.",
        icon: "📘",
        resources: ["Total TypeScript", "Type Challenges"]
    },
]

const experiments = [
    "Learning Advanced development concepts",
    "Deep diving into scalability from first principles",
    "Building something everyday!",
]

export default function GaragePage() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <div className="min-h-screen">
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
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

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Current Projects - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Projects Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Rocket className="w-5 h-5 text-muted-foreground" />
                                    <h2 className="font-semibold text-foreground">Currently Building</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {currentProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                        >
                                            <Card className="h-full hover:border-foreground/20 transition-colors group">
                                                <CardHeader className="pb-3">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Badge
                                                            variant={project.status === 'Almost Done' ? 'default' : 'secondary'}
                                                            className={project.status === 'Almost Done' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}
                                                        >
                                                            {project.status}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">{project.startDate}</span>
                                                    </div>
                                                    <div className="flex items-start justify-between">
                                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        {project.link && (
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-muted-foreground hover:text-foreground transition-colors"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="pb-3">
                                                    <p className="text-sm text-muted-foreground mb-4">
                                                        {project.description}
                                                    </p>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-xs">
                                                            <span className="text-muted-foreground">Progress</span>
                                                            <span className="text-foreground">{project.progress}%</span>
                                                        </div>
                                                        <Progress value={project.progress} className="h-1.5" />
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.technologies.slice(0, 3).map((tech) => (
                                                            <Badge key={tech} variant="outline" className="text-xs">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                        {project.technologies.length > 3 && (
                                                            <Badge variant="outline" className="text-xs">
                                                                +{project.technologies.length - 3}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Experiments */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <Card className="bg-linear-to-br from-indigo-500/5 to-purple-500/5 border-indigo-500/10">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Zap className="w-5 h-5 text-indigo-400" />
                                            <h3 className="font-semibold text-foreground">Quick Experiments</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experiments.map((exp, index) => (
                                                <motion.span
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                                    transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                                                >
                                                    <Badge variant="secondary" className="cursor-default hover:border-indigo-500/50 hover:text-indigo-400 transition-all">
                                                        {exp}
                                                    </Badge>
                                                </motion.span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Learning - Side column */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                                    <h2 className="font-semibold text-foreground">Currently Learning</h2>
                                </div>
                                <div className="space-y-3">
                                    {learningItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                        >
                                            <Card className="hover:border-foreground/20 transition-colors group">
                                                <CardContent className="p-4">
                                                    <div className="flex items-start gap-3">
                                                        <span className="text-2xl">{item.icon}</span>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                                                                {item.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {item.resources.map((resource) => (
                                                                    <Badge key={resource} variant="outline" className="text-xs">
                                                                        {resource}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
