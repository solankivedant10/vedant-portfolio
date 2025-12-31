'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Calendar, ArrowRight, Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socials = [
    { name: 'GitHub', href: 'https://github.com/ANIKETHPAWAR', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aniketh-pawar-070162210', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/aniketh_pawar', icon: Twitter },
    { name: 'Email', href: 'mailto:anikethpawar.dev@gmail.com', icon: Mail },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1Ra2nKCzuggAC7HkwFXEGR3mGAyJTvasR/view?usp=sharing', icon: FileText },
]

const stats = [
    { value: '8+', label: 'Months Experience' },
    { value: '4+', label: 'Projects Shipped' },
    { value: '500+', label: 'GitHub Contributions' },
]

export function Hero() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "secret" })
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
        })()
    }, [])

    return (
        <section className="relative min-h-screen flex items-center px-6 pt-24">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Label */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-6">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Welcome to my portfolio
                            </span>
                        </div>

                        {/* Main Heading - Large typography with gradient */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            <span className="text-muted-foreground">I'm </span>
                            <span className="text-white">Aniketh,</span>
                            <br />
                            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                building digital
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                experiences.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                            A final-year engineering student at NIT Durgapur who fell in love with
                            turning ideas into reality through code. From building election systems to
                            news platforms, I craft solutions that matter.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Button
                                data-cal-namespace="secret"
                                data-cal-link="anikethpawar/secret"
                                data-cal-config='{"layout":"month_view"}'
                                className="bg-white text-black hover:bg-white/90 gap-2"
                            >
                                <Calendar className="w-4 h-4" />
                                Book a call
                            </Button>

                            <Button variant="outline" asChild className="gap-2">
                                <Link href="/#projects">
                                    View my work
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>

                            {/* Divider */}
                            <div className="hidden sm:block w-px h-8 bg-border mx-1" />

                            {/* Social Icons */}
                            <div className="flex items-center gap-1">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-lg text-muted-foreground hover:text-white hover:bg-secondary transition-all"
                                        title={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-border">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Profile Image */}
                            <div className="relative">
                                <div
                                    className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10"
                                >
                                    {/* Placeholder until you add profile image to public folder */}
                                    <div className="w-full h-full bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-white/20">AP</span>
                                    </div>
                                    {/* Uncomment when you add image to public folder:
                  <Image 
                    src="/images/profile.png"
                    alt="Aniketh Pawar"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                                </div>

                                {/* Floating Card - Currently */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -right-12 -top-12 px-4 py-3 rounded-lg bg-background/90 backdrop-blur-md border border-white/10"
                                >
                                    <p className="text-[10px] text-emerald-400 uppercase tracking-wider mb-1">Currently</p>
                                    <p className="text-sm text-white font-medium">Learning & Building 🌍</p>
                                </motion.div>

                                {/* Floating Card - Location */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute -left-4 bottom-12 px-4 py-3 rounded-lg bg-background/90 backdrop-blur-md border border-white/10"
                                >
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Based in</p>
                                    <p className="text-sm text-white font-medium">HYD, India 🇮🇳</p>
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl border border-border" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
