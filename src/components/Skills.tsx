'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

// Added hex colors for each technology
const techStack = [
    // Languages
    { name: 'JavaScript', category: 'Languages', color: '#F7DF1E' }, // Yellow
    { name: 'TypeScript', category: 'Languages', color: '#3178C6' }, // Blue
    { name: 'Python', category: 'Languages', color: '#3776AB' },     // Blue-Yellow
    { name: 'C++', category: 'Languages', color: '#00599C' },        // Dark Blue

    // Frontend
    { name: 'React', category: 'Frontend', color: '#61DAFB' },       // Cyan
    { name: 'Next.js', category: 'Frontend', color: '#ffffff' },     // White (since bg is dark)
    { name: 'Tailwind CSS', category: 'Frontend', color: '#38B2AC' },// Teal
    { name: 'Framer Motion', category: 'Frontend', color: '#E902B5' },// Pink
    { name: 'HTML5', category: 'Frontend', color: '#E34F26' },       // Orange
    { name: 'CSS3', category: 'Frontend', color: '#1572B6' },        // Blue

    // Backend
    { name: 'Node.js', category: 'Backend', color: '#339933' },      // Green
    { name: 'Express', category: 'Backend', color: '#ffffff' },      // White
    { name: 'Supabase', category: 'Backend', color: '#3ECF8E' },     // Green
    { name: 'Gemini API', category: 'Backend', color: '#8E75B2' },   // Purple

    // Databases
    { name: 'MongoDB', category: 'Databases', color: '#47A248' },   // Green
    { name: 'PostgreSQL', category: 'Databases', color: '#336791' }, // Blue
    { name: 'Redis', category: 'Databases', color: '#DC382D' },      // Red

    // DevOps & Tools
    { name: 'Git', category: 'Tools', color: '#F05032' },            // Orange
    { name: 'Docker', category: 'DevOps', color: '#2496ED' },        // Blue
    { name: 'AWS', category: 'DevOps', color: '#FF9900' },           // Orange
    { name: 'Vercel', category: 'DevOps', color: '#ffffff' },        // White
    { name: 'Terraform', category: 'DevOps', color: '#7B42BC' },     // Purple
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
                        <Badge
                            variant="secondary"
                            className="text-sm py-1.5 px-3 cursor-default hover:bg-secondary/80 flex items-center gap-1.5"
                            style={{
                                borderColor: `${tech.color}20` // Subtle colored border
                            }}
                        >
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: tech.color }}
                            />
                            <span style={{ color: '#e4e4e7' }}>{tech.name}</span>
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
                                <Lightbulb className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Currently Learning</h3>
                                <p className="text-sm text-muted-foreground">
                                    Exploring autonomous agent architectures (Kestra, LangChain), diving deeper into RAG pipelines, and mastering system design for scalable AI platforms.
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