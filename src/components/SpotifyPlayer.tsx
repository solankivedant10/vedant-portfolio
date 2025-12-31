"use client";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SpotifyPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Demo Track: "Lofi Study" (You can replace this URL later)
    const trackUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112762.mp3";
    const albumArt = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop";

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center gap-4 bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/10 rounded-full pr-6 pl-2 py-2 transition-all duration-300 w-fit">

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={trackUrl} loop />

            {/* Album Art / Play Button Combo */}
            <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="relative group shrink-0 w-10 h-10 rounded-full overflow-hidden border border-white/10"
            >
                <Image
                    src={albumArt}
                    alt="Album Art"
                    width={40}
                    height={40}
                    className={cn(
                        "object-cover w-full h-full transition-transform duration-[3s] ease-linear",
                        isPlaying ? "animate-spin-slow" : ""
                    )}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {isPlaying ? <Pause size={16} className="text-white fill-white" /> : <Play size={16} className="text-white fill-white" />}
                </div>
            </button>

            {/* Track Info */}
            <div className="flex flex-col text-left mr-2">
                <span className="text-xs font-bold text-white leading-tight">
                    Lofi Coding
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                    {isPlaying ? "Now Playing..." : "Paused"}
                </span>
            </div>

            {/* Visualizer Bars (Fake) */}
            <div className="flex items-end gap-[2px] h-4">
                {[1, 2, 3, 4].map((bar) => (
                    <div
                        key={bar}
                        className={cn(
                            "w-[2px] bg-emerald-500 rounded-full transition-all duration-300",
                            isPlaying ? "animate-music-bar" : "h-1"
                        )}
                        style={{
                            animationDelay: `${bar * 0.1}s`,
                            height: isPlaying ? undefined : "4px"
                        }}
                    />
                ))}
            </div>


        </div>
    );
}
