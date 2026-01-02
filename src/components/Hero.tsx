"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Typewriter } from "@/components/ui/typewriter";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

export default function Hero() {
    // Initialize Cal.com embed
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-32 pb-20 overflow-hidden">

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-4"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                        Available for hire
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                >
                    I&apos;m <span className="text-foreground">Vedant</span>, <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-indigo-400">
                        <Typewriter
                            words={[
                                "building digital experiences.",
                                "crafting AI solutions.",
                                "shipping products fast.",
                                "turning ideas into code.",
                            ]}
                            typingSpeed={80}
                            deletingSpeed={40}
                            delayBetweenWords={2500}
                        />
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    A Software Developer specializing in building high-performance web applications, autonomous agents, and scalable platforms.
                </motion.p>

                {/* Animated Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <AnimatedText
                        text="Software Developer & AI Enthusiast"
                        textClassName="text-xl md:text-2xl font-semibold text-foreground/80"
                        underlineClassName="text-purple-500"
                        underlineDuration={1.8}
                    />
                </motion.div>

                {/* Buttons & Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                >
                    <div className="flex gap-4">
                        {/* Replaced BookingModal with Direct Cal.com Button */}
                        <Button
                            data-cal-namespace="15min"
                            data-cal-link="solanki-vedant-qhzoml" // Using the handle from your snippet
                            data-cal-config='{"layout":"month_view"}'
                            size="lg"
                            className="rounded-full px-8 text-base h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            <Calendar className="mr-2 h-4 w-4" />
                            Book a call
                        </Button>

                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base h-12 bg-background/50 backdrop-blur-sm hover:bg-background/80">
                            <Link href="/projects">
                                View my work <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Social Icons Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 justify-center pt-4 text-muted-foreground"
                >
                    <a href="https://github.com/solankivedant10" className="hover:text-foreground transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer"><Github className="h-6 w-6" /></a>
                    <a href="https://www.linkedin.com/in/vedants01" className="hover:text-foreground transition-colors hover:scale-110" target="_blank" rel="noopener noreferrer"><Linkedin className="h-6 w-6" /></a>
                    <a href="mailto:vedants1968@gmail.com" className="hover:text-foreground transition-transform hover:scale-110"><Mail className="h-6 w-6" /></a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-3 gap-8 border-t border-border/50 pt-12 mt-12 max-w-2xl mx-auto"
                >
                    <div>
                        <h4 className="text-3xl font-bold text-foreground">8+</h4>
                        <p className="text-sm text-muted-foreground mt-1">Months Experience</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-foreground">5+</h4>
                        <p className="text-sm text-muted-foreground mt-1">Projects Shipped</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-foreground">50+</h4>
                        <p className="text-sm text-muted-foreground mt-1">GitHub Contributions</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}