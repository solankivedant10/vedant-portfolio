"use client";
import Link from "next/link";
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="max-w-3xl space-y-8 z-10">
                <div className="space-y-4">
                    <p className="text-base text-zinc-500 uppercase tracking-wider">
                        — WELCOME TO MY PORTFOLIO
                    </p>
                    <h1 className="text-5xl md:text-[64px] font-bold tracking-tight text-white leading-[1.1]">
                        I&apos;m <span className="text-white">Aniketh</span>, <br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, rgb(255, 255, 255), rgb(161, 161, 170))' }}>
                            building digital experiences.
                        </span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                        A final-year engineering student at NIT Durgapur who fell in love with
                        turning ideas into reality through code. From building election systems
                        to news platforms, I craft solutions that matter.
                    </p>
                </div>

                {/* Buttons & Socials */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="flex gap-4">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-medium rounded-full px-8">
                            <a href="https://cal.com/aniketh-pawar" target="_blank" rel="noopener noreferrer">
                                <Calendar className="mr-2 h-4 w-4" /> Book a call
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-white/10 rounded-full">
                            <Link href="/#projects">
                                View my work <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="flex gap-4 text-zinc-500">
                        <a href="https://github.com/ANIKETHPAWAR" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                        <a href="https://www.linkedin.com/in/aniketh-pawar-070162210" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                        <a href="https://x.com/aniketh_pawar" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5" /></a>
                        <a href="mailto:hello@aniketh.xyz" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="pt-12 grid grid-cols-3 gap-8 border-t border-zinc-800/50 mt-12 max-w-lg">
                    <div>
                        <h4 className="text-3xl font-bold text-white">8+</h4>
                        <p className="text-sm text-zinc-500 mt-1">Months Experience</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white">4+</h4>
                        <p className="text-sm text-zinc-500 mt-1">Projects Shipped</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white">500+</h4>
                        <p className="text-sm text-zinc-500 mt-1">GitHub Contributions</p>
                    </div>
                </div>
            </div>

            {/* Optional: Right side visual placeholder (can be added later) */}
        </section>
    );
}
