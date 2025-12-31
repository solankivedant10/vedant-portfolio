'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Download, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skills } from '@/components/Skills'

const highlights = [
    "I'm not just a developer who writes code — I'm someone who genuinely cares about the problems I'm solving. Whether it's helping people discover hidden gems in their city with SneakOut or keeping hundreds informed with SangbadBangla news, I build with purpose.",
    "At 21, I've already shipped production apps used by real users, worked with leading engineering teams. I've learned to move fast, ship quality, and iterate based on feedback.",
    "I taught myself full-stack development while pursuing Electrical Engineering at NIT Durgapur. That same self-driven curiosity means I pick up new technologies quickly and never wait to be spoon-fed."
]

const preferences = [
    {
        title: "Building products that matter.",
        description: "I'm most energized when working on products that solve real problems for real people. Give me a meaningful challenge over a cushy role any day."
    },
    {
        title: "Ownership & autonomy.",
        description: "I thrive when given ownership of features end-to-end. Trust me with a problem, and I'll figure out the solution — that's how I learn best."
    },
    {
        title: "Growth-focused environment.",
        description: "I want to be surrounded by people smarter than me. A team that pushes me to level up my craft is worth more than any perk."
    },
    {
        title: "Remote-friendly culture.",
        description: "I do my best work with flexibility. Whether it's 2 AM debugging sessions or early morning brainstorms, I optimize for output, not hours at a desk."
    }
]

export default function AboutPage() {
    const bioRef = useRef(null)
    const whyRef = useRef(null)
    const bioInView = useInView(bioRef, { once: true, margin: "-100px" })
    const whyInView = useInView(whyRef, { once: true, margin: "-100px" })

    return (
        <div className="min-h-screen">
            <main className="pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Bio Section */}
                    <motion.div
                        ref={bioRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={bioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                My Story
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold text-foreground mb-8">
                            A developer driven by curiosity and{' '}
                            <span className="text-muted-foreground">the desire to build things that matter.</span>
                        </h1>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                My journey into tech started not in a classroom, but with a simple question:{' '}
                                <span className="text-foreground">&quot;How do websites actually work?&quot;</span> That curiosity
                                led me down a rabbit hole of HTML, CSS, JavaScript, and eventually to building
                                full-stack applications.
                            </p>

                            <p>
                                At <span className="text-foreground">NIT Durgapur</span>, while pursuing Electrical
                                Engineering, I found myself spending more time debugging code than solving
                                circuit problems. I realized that my true passion lay in creating digital
                                experiences that solve real problems.
                            </p>

                            <p>
                                Today, I&apos;ve shipped products used by real users — from a{' '}
                                <span className="text-foreground">regional news platform</span> serving thousands of
                                readers to a <span className="text-foreground">location discovery app</span> helping
                                people find hidden gems in their city. Each project taught me that great software
                                isn&apos;t just about clean code — it&apos;s about understanding people.
                            </p>

                            <p>
                                When I&apos;m not coding, you&apos;ll find me exploring new frameworks, writing about
                                my learnings, or brainstorming the next problem to solve.
                            </p>
                        </div>

                        {/* Resume Link */}
                        <div className="mt-10 pt-8 border-t border-border">
                            <Button variant="outline" asChild className="gap-2">
                                <a
                                    href="https://drive.google.com/file/d/1Ra2nKCzuggAC7HkwFXEGR3mGAyJTvasR/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    <Separator className="my-16" />

                    {/* Skills Section */}
                    <Skills />

                    <Separator className="my-16" />

                    {/* Why Hire Me Section */}
                    <motion.div
                        ref={whyRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Why Me
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            Why should you hire me?
                        </h2>

                        <div className="space-y-4 mb-12">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-3"
                                >
                                    <span className="text-primary mt-0.5 shrink-0">↳</span>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Preferences */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                What I Look For
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            My ideal opportunity
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {preferences.map((pref, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="h-full hover:border-foreground/20 transition-colors">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-primary">↳</span>
                                                <h3 className="font-medium text-foreground">{pref.title}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                                                {pref.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <Separator className="my-16" />

                    {/* GitHub Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Open Source
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            Check out my work
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            500+ contributions and counting. See what I&apos;m building.
                        </p>
                        <Button asChild className="gap-2">
                            <a
                                href="https://github.com/ANIKETHPAWAR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                                View GitHub Profile
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
