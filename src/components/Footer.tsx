import Link from 'next/link'
import { SocialIcons } from '@/components/ui/social-icons'
import { SpotifyPlayer } from '@/components/SpotifyPlayer'

const footerLinks = [
    { href: '/', label: 'Home' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left - Logo & Copyright */}
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                            <span className="text-black font-bold text-[10px]">AP</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                            © {currentYear} Aniketh Pawar
                        </span>
                    </div>

                    {/* Center - Nav Links */}
                    <div className="flex items-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right - Social Icons & Player */}
                    <div className="flex flex-col items-end gap-4">
                        <SocialIcons />
                        <SpotifyPlayer />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
