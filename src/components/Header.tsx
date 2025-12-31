"use client";
import React, { useState, useEffect } from "react";

export const Header = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
            setTime(now.toLocaleString("en-US", options).replace(/,/g, ""));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-100 px-6 py-6 pointer-events-none">
            <div className="flex items-center gap-4 pointer-events-auto">
                <div className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
                    AP
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-sm text-foreground leading-tight">
                        Aniketh Pawar
                    </span>
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        {time || "Loading..."}
                    </span>
                </div>
            </div>
        </header>
    );
};
