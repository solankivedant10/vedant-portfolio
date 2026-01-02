"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mail, MapPin } from "lucide-react"
import { SocialIcons } from "@/components/ui/social-icons"
import { SpotifyPlayer } from "@/components/SpotifyPlayer"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Newsletter */}
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
                        <p className="mb-6 text-muted-foreground">
                            Join my newsletter for the latest updates on my projects and articles.
                        </p>
                        <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pr-12 backdrop-blur-sm bg-background/50"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <Link href="/" className="block transition-colors hover:text-primary">Home</Link>
                            <Link href="/experience" className="block transition-colors hover:text-primary">Experience</Link>
                            <Link href="/projects" className="block transition-colors hover:text-primary">Projects</Link>
                            <Link href="/garage" className="block transition-colors hover:text-primary">Garage</Link>
                            <Link href="/blog" className="block transition-colors hover:text-primary">Blog</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                        <address className="space-y-3 text-sm not-italic text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Ahmedabad, India</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:vedants1968@gmail.com" className="hover:text-primary transition-colors">
                                    vedants1968@gmail.com
                                </a>
                            </div>
                        </address>
                    </div>

                    {/* Column 4: Socials & Music */}
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
                        <div className="mb-6 flex flex-col gap-4">
                            <SocialIcons />
                            <div className="mt-2">
                                <SpotifyPlayer />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Vedant Solanki. All rights reserved.
                    </p>
                    <nav className="flex gap-4 text-sm text-muted-foreground">
                        <Link href="#" className="transition-colors hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="transition-colors hover:text-primary">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}