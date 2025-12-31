'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

const techStack = [
    // Languages
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    // Frontend
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    // Databases
    { name: 'MongoDB', category: 'Databases' },
    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'Firebase', category: 'Databases' },
    // DevOps & Tools
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'DevOps' },
    { name: 'Vercel', category: 'DevOps' },
    { name: 'Figma', category: 'Design' },
    { name: 'VS Code', category: 'Tools' },
]

export function Skills() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section className="py-16">
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Technical Arsenal
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                    Tech Stack
                </h2>
                <p className="text-muted-foreground max-w-lg">
                    Technologies I use to bring ideas to life. Always learning, always improving.
                </p>
            </motion.div>

            {/* Tech Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap gap-2 mb-8"
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.03, duration: 0.3 }}
                    >
                        <Badge variant="secondary" className="text-sm py-1.5 px-3 cursor-default hover:bg-secondary/80">
                            {tech.name}
                        </Badge>
                    </motion.div>
                ))}
            </motion.div>

            {/* Currently Learning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                                <Lightbulb className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Currently Learning</h3>
                                <p className="text-sm text-muted-foreground">
                                    Exploring system design patterns, diving deeper into Web3 technologies, and building my knowledge in DevOps and cloud infrastructure.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}

export default Skills
