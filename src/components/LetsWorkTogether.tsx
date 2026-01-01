"use client"
import React, { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"

export function LetsWorkTogether() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsClicked(true)
        setTimeout(() => setShowSuccess(true), 500)
    }

    const handleBookCall = () => {
        window.open("https://cal.com/solanki-vedant-qhzoml", "_blank")
    }

    return (
        <section id="contact" className="flex min-h-[50vh] items-center justify-center px-6 py-24">
            <div className="relative flex flex-col items-center gap-12 w-full max-w-4xl mx-auto">
                {/* Success State - Click to Book */}
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: showSuccess ? 1 : 0,
                        transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                        pointerEvents: showSuccess ? "auto" : "none",
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">Perfect</span>
                        <h3 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">Let&apos;s talk</h3>
                    </div>
                    <button
                        onClick={handleBookCall}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className="group relative flex items-center gap-4 cursor-pointer"
                    >
                        <div className={`relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4 ${isButtonHovered ? 'bg-foreground border-foreground' : 'bg-transparent border-border'}`}>
                            <Calendar className={`size-4 sm:size-5 ${isButtonHovered ? 'text-background' : 'text-foreground'}`} />
                            <span className={`text-sm font-medium tracking-wide sm:text-base ${isButtonHovered ? 'text-background' : 'text-foreground'}`}>Book a call</span>
                            <ArrowUpRight className={`size-4 sm:size-5 ${isButtonHovered ? 'text-background' : 'text-foreground'}`} />
                        </div>
                    </button>
                </div>

                {/* Default State - Big Typography */}
                <div
                    className="group relative cursor-pointer select-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => handleClick(e)}
                    style={{
                        pointerEvents: isClicked ? "none" : "auto",
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)"
                    }}
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="relative text-center text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                            <span className="block transition-transform duration-700" style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)" }}>Let&apos;s work</span>
                            <span className="block transition-transform duration-700 delay-75" style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)" }}>
                                <span className="text-muted-foreground/60">together</span>
                            </span>
                        </h2>
                        <div className={`relative mt-4 flex size-16 items-center justify-center rounded-full border sm:size-20 transition-all duration-500 ${isHovered ? 'border-foreground bg-foreground' : 'border-border bg-transparent'}`}>
                            <ArrowUpRight className={`size-6 sm:size-7 transition-colors duration-500 ${isHovered ? 'text-background' : 'text-foreground'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}