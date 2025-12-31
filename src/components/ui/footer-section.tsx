"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { SocialIcons } from "@/components/ui/social-icons" // Import our previous component

export function Footer() {
    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
                        <p className="mb-6 text-muted-foreground">
                            Join our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="relative max-w-sm">
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
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <a href="/" className="block transition-colors hover:text-primary">Home</a>
                            <a href="/about" className="block transition-colors hover:text-primary">About Us</a>
                            <a href="/projects" className="block transition-colors hover:text-primary">Projects</a>
                            <a href="/blog" className="block transition-colors hover:text-primary">Blog</a>
                            <a href="/contact" className="block transition-colors hover:text-primary">Contact</a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                        <address className="space-y-2 text-sm not-italic text-muted-foreground">
                            <p>123 Innovation Street</p>
                            <p>Tech City, TC 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: hello@aniketh.xyz</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="mb-6 flex space-x-4">
                            {/* Integrated Social Icons Component */}
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Aniketh Pawar. All rights reserved.
                    </p>
                    <nav className="flex gap-4 text-sm text-muted-foreground">
                        <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
                        <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
