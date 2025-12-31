'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Shield } from 'lucide-react'

const experiences = [
    {
        id: 1,
        role: 'Full Stack Developer',
        company: 'Stealth Startup',
        type: 'Full-time',
        duration: 'Aug 2025 - Oct 2025',
        description: 'Building the core product from ground up. Working across the entire stack to ship features fast while maintaining code quality.',
        skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        isStealth: true,
    },
    {
        id: 2,
        role: 'Frontend Developer',
        company: 'Mande Network',
        type: 'Internship',
        duration: 'Sep 2024 - Jan 2025',
        description: 'Led frontend development for Web3 dashboard. Improved load times by 40% through code optimization and lazy loading strategies.',
        skills: ['React', 'TypeScript', 'Web3.js', 'Tailwind'],
        isStealth: false,
    }
]

const skills = [
    // Languages
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C++", category: "Languages" },
    // Frontend
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Figma", category: "Frontend" },
    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "Redis", category: "Databases" },
    { name: "Firebase", category: "Databases" },
    // DevOps
    { name: "AWS", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
    { name: "Vercel", category: "DevOps" },
    // Tools
    { name: "Git", category: "Tools" },
    { name: "Postman", category: "Tools" },
]

interface ExperienceCardProps {
    exp: typeof experiences[0]
    index: number
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 pb-12 last:pb-0"
        >
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-primary" />

            {/* Content */}
            <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                        {exp.isStealth ? (
                            <Shield className="w-6 h-6 text-muted-foreground" />
                        ) : (
                            <Briefcase className="w-6 h-6 text-muted-foreground" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                                <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                                <p className="text-sm text-muted-foreground">{exp.company}</p>
                            </div>
                            <div className="text-right">
                                <Badge variant="secondary">{exp.type}</Badge>
                                <p className="text-xs text-muted-foreground mt-1">{exp.duration}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function Experience() {
    const sectionRef = useRef(null)
    const skillsRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })

    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            Career
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>

                {/* Tech Stack Section */}
                <div className="mt-20 pt-16 border-t border-border">
                    <motion.div
                        ref={skillsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Tech Stack
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">
                            Tools I Work With
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.03, duration: 0.3 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-default"
                            >
                                {skill.name}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experience
