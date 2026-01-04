'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/garage', label: '🔧 Garage', highlight: true },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
]

const socials = [
    { name: 'GitHub', href: 'https://github.com/solankivedant10', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vedants01', icon: Linkedin },
    { name: 'Email', href: 'mailto:vedants1968@gmail.com', icon: Mail },
]

export function Navbar() {
    const [time, setTime] = useState<Date | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Hydration-safe time update
    useEffect(() => {
        const handle = requestAnimationFrame(() => setTime(new Date()))
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => {
            cancelAnimationFrame(handle)
            clearInterval(timer)
        }
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        if (isOpen) {
            const handle = requestAnimationFrame(() => setIsOpen(false))
            return () => cancelAnimationFrame(handle)
        }
    }, [pathname, isOpen])

    const formatDate = () => {
        if (!time) return ''
        return time.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const formatTime = () => {
        if (!time) return ''
        return time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <nav
                    className="flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/10"
                >
                    {/* Logo / Name */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white flex items-center justify-center">
                            <span className="text-black font-bold text-xs sm:text-sm">VS</span>
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium text-white">Vedant Solanki</p>
                            <p className="text-[10px] text-muted-foreground font-mono">
                                {formatDate()} • {formatTime()}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = item.path === '/'
                                ? pathname === '/'
                                : pathname.startsWith(item.path)
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${isActive
                                        ? 'text-white bg-secondary'
                                        : item.highlight
                                            ? 'text-indigo-400 hover:text-indigo-300 hover:bg-secondary/50'
                                            : 'text-muted-foreground hover:text-white hover:bg-secondary/50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}

                        <Separator orientation="vertical" className="h-5 mx-2 bg-border" />

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-xs text-emerald-400 font-medium">Available</span>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-muted-foreground hover:text-white"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] bg-background border-l border-border p-0">
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-border">
                                    <div>
                                        <p className="text-sm font-medium text-white">Menu</p>
                                        <p className="text-[10px] text-muted-foreground font-mono">{formatTime()}</p>
                                    </div>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </SheetClose>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 p-4">
                                    <div className="space-y-1">
                                        {navItems.map((item, index) => {
                                            const isActive = item.path === '/'
                                                ? pathname === '/'
                                                : pathname.startsWith(item.path)
                                            return (
                                                <motion.div
                                                    key={item.path}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <SheetClose asChild>
                                                        <Link
                                                            href={item.path}
                                                            className={`block px-4 py-3 rounded-lg text-sm transition-colors ${isActive
                                                                ? 'bg-secondary text-white'
                                                                : item.highlight
                                                                    ? 'text-indigo-400 hover:text-indigo-300 hover:bg-secondary/50'
                                                                    : 'text-muted-foreground hover:text-white hover:bg-secondary/50'
                                                                }`}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    </SheetClose>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </nav>

                                {/* Footer */}
                                <div className="p-4 border-t border-border">
                                    <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className="text-xs text-emerald-400 font-medium">Available for work</span>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-2 mt-4">
                                        {socials.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-lg text-muted-foreground hover:text-white hover:bg-secondary transition-all"
                                            >
                                                <social.icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </motion.header>
    )
}

export default Navbar