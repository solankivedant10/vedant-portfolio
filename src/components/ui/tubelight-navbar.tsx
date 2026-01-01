"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-9999 mb-6 sm:pt-6 w-full sm:w-auto px-4 sm:px-0", className)}>
            <div className="flex items-center gap-1 bg-zinc-950/90 border border-white/6 backdrop-blur-md py-2 px-2 rounded-xl shadow-lg">

                {/* Nav Items */}
                {items.map((item) => {
                    const isActive = item.url === pathname || (item.url !== "/" && pathname.startsWith(item.url));
                    const isGarage = item.name === "Garage"

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            className={cn(
                                "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                                "text-zinc-400 hover:text-white",
                                isActive && "bg-zinc-800 text-white"
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <item.icon size={18} strokeWidth={2.5} />
                            </span>

                            {/* Garage Emoji/Icon Decorator */}
                            {isGarage && (
                                <span className="ml-1 hidden md:inline-block text-xs">🛠️</span>
                            )}

                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 w-full bg-zinc-800 rounded-lg -z-10"
                                    initial={false}
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

                {/* Desktop "Available" Status Divider */}
                <div className="hidden sm:block w-px h-6 bg-white/10 mx-1" />

                {/* Available Status */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-500 whitespace-nowrap">Available</span>
                </div>

            </div>
        </div>
    )
}
