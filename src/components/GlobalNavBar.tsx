"use client"

import { Home, User, Briefcase, FileText, Code, PenTool, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Experience', url: '/experience', icon: FileText },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Garage', url: '/garage', icon: Code },
    { name: 'Blog', url: '/blog', icon: PenTool },
    { name: 'Contact', url: '/contact', icon: Phone }
]

export function GlobalNavBar() {
    return <NavBar items={navItems} />
}
