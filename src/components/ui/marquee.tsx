"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
}

export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around gap-(--gap)", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:paused": pauseOnHover,
                            "direction-reverse": reverse,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}

export function MarqueeItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800/50 transition-colors",
                className
            )}
        >
            {children}
        </div>
    );
}
