'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Timeline } from '@/components/ui/timeline'
import { Badge } from '@/components/ui/badge'

const experiences = [
    {
        id: 1,
        role: 'Full Stack Developer',
        company: 'Stealth Startup',
        type: 'Full-time',
        duration: 'Aug 2025 - Oct 2025',
        description: 'Building the core product from ground up. Working across the entire stack to ship features fast while maintaining code quality.',
        skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
        id: 2,
        role: 'Frontend Developer',
        company: 'Mande Network',
        type: 'Internship',
        duration: 'Sep 2024 - Jan 2025',
        description: 'Led frontend development for Web3 dashboard. Improved load times by 40% through code optimization and lazy loading strategies.',
        skills: ['React', 'TypeScript', 'Web3.js', 'Tailwind'],
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

export function Experience() {
    const skillsRef = useRef(null)
    const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })

    const timelineData = experiences.map(exp => ({
        title: exp.duration,
        content: (
            <div>
                <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                        {exp.company}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-muted-foreground">
                            {exp.role}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                            {exp.type}
                        </Badge>
                    </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        )
    }))

    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Career
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Work Experience
                </h2>
                <p className="text-muted-foreground max-w-xl">
                    My professional journey and the companies I've had the privilege to work with.
                </p>
            </div>

            <Timeline data={timelineData} />

            {/* Tech Stack Section */}
            <div className="max-w-4xl mx-auto px-6 mt-20 pt-16 border-t border-border">
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
        </section>
    )
}

export default Experience
