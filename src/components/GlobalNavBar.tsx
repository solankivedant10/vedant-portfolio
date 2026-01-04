"use client"

import { Home, User, Briefcase, FolderGit2, Terminal, PenTool, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Resume', url: '/about', icon: User },
    { name: 'Experience', url: '/experience', icon: Briefcase }, // Work History
    { name: 'Projects', url: '/projects', icon: FolderGit2 },     // Code/Repos
    { name: 'Garage', url: '/garage', icon: Terminal },           // Experiments/Tinkering
    { name: 'Blog', url: '/blog', icon: PenTool },
    { name: 'Contact', url: '/contact', icon: Phone }
]

export function GlobalNavBar() {
    return <NavBar items={navItems} />
}