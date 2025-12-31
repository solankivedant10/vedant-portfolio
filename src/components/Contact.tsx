'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import { Calendar, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const socials = [
    { name: 'GitHub', href: 'https://github.com/ANIKETHPAWAR', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aniketh-pawar-070162210', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/aniketh_pawar', icon: Twitter },
    { name: 'Email', href: 'mailto:anikethpawar.dev@gmail.com', icon: Mail },
]

export function Contact() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "secret" })
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
        })()
    }, [])

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-4">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            Contact
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Let&apos;s work together
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Book a Call */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Card className="h-full">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-2">Prefer a call?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Schedule a 15-minute intro call to discuss your project.
                                </p>
                                <Button
                                    data-cal-namespace="secret"
                                    data-cal-link="anikethpawar/secret"
                                    data-cal-config='{"layout":"month_view"}'
                                    variant="outline"
                                    className="w-full gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Schedule a call
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Connect with me */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Card className="h-full">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                                        >
                                            <social.icon className="w-4 h-4" />
                                            <span className="text-sm">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Response time */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xs text-muted-foreground text-center mt-8"
                >
                    I typically respond within 24 hours
                </motion.p>
            </div>
        </section>
    )
}

export default Contact
