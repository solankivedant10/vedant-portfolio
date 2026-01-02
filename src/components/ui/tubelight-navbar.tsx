"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Briefcase, FileCode, Wrench, Mail, Menu, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Projects", url: "/projects", icon: FileCode },
    { name: "Experience", url: "/experience", icon: Briefcase },
    { name: "Garage", url: "/garage", icon: Wrench },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: Mail },
]

interface NavBarProps {
    className?: string
}

export function NavBar({ className }: NavBarProps) {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydration check pattern
        setIsMounted(true)
    }, [])

    // Close sheet when route changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Route change side effect
        setIsOpen(false)
    }, [pathname])

    if (!isMounted) return null

    return (
        <>
            {/* Desktop Navbar */}
            <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-9999 mb-6 sm:pt-6 w-full sm:w-auto px-4 sm:px-0 hidden sm:block", className)}>
                <div className="flex items-center gap-1 bg-zinc-950/90 border border-white/10 backdrop-blur-md py-2 px-2 rounded-xl shadow-lg">

                    {navItems.map((item) => {
                        const isActive = item.url === pathname || (item.url !== "/" && pathname.startsWith(item.url));
                        const isGarage = item.name === "Garage"

                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                className={cn(
                                    "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                                    "text-zinc-400 hover:text-white",
                                    isActive && "text-white"
                                )}
                            >
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden">
                                    <item.icon size={18} strokeWidth={2.5} />
                                </span>

                                {isGarage && (
                                    <span className="ml-1 hidden md:inline-block text-xs">🛠️</span>
                                )}

                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 w-full bg-zinc-800 rounded-lg -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        )
                    })}

                    <div className="hidden sm:block w-px h-6 bg-white/10 mx-1" />

                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-500 whitespace-nowrap">Available</span>
                    </div>

                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="fixed bottom-0 left-0 right-0 z-9999 p-4 sm:hidden">
                <div className="flex items-center justify-between bg-zinc-950/95 border border-white/10 backdrop-blur-md py-3 px-4 rounded-2xl shadow-lg">

                    {/* Logo/Brand */}
                    <Link href="/" className="text-white font-bold text-lg">
                        VS
                    </Link>

                    {/* Center: Available Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-500">Available</span>
                    </div>

                    {/* Right: Menu */}
                    <div className="flex items-center gap-2">

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 text-zinc-400 hover:text-white hover:bg-zinc-800"
                                    aria-label="Open navigation menu"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="bg-zinc-950 border-zinc-800 rounded-t-3xl">
                                <SheetHeader className="sr-only">
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                </SheetHeader>

                                {/* Drag Handle */}
                                <div className="flex justify-center pt-2 pb-4">
                                    <div className="w-12 h-1 bg-zinc-700 rounded-full" />
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2 px-2 pb-8">
                                    {navItems.map((item) => {
                                        const isActive = item.url === pathname || (item.url !== "/" && pathname.startsWith(item.url));

                                        return (
                                            <SheetClose asChild key={item.name}>
                                                <Link
                                                    href={item.url}
                                                    className={cn(
                                                        "flex items-center gap-4 px-4 py-4 rounded-xl transition-colors",
                                                        "text-zinc-300 hover:bg-zinc-900 hover:text-white",
                                                        isActive && "bg-zinc-800 text-white"
                                                    )}
                                                >
                                                    <item.icon className="h-5 w-5" />
                                                    <span className="text-base font-medium">{item.name}</span>
                                                    {item.name === "Garage" && (
                                                        <span className="text-sm">🛠️</span>
                                                    )}
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </nav>

                                {/* Footer */}
                                <div className="border-t border-zinc-800 pt-4 px-4">
                                    <p className="text-xs text-zinc-500 text-center">
                                        © 2025 Vedant Solanki
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </>
    )
}