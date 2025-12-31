import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
]

const socials = [
    { name: 'GitHub', href: 'https://github.com/ANIKETHPAWAR', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aniketh-pawar-070162210', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/aniketh_pawar', icon: Twitter },
    { name: 'Email', href: 'mailto:anikethpawar.dev@gmail.com', icon: Mail },
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

                    {/* Right - Social Icons */}
                    <div className="flex items-center gap-2">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                                title={social.name}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
