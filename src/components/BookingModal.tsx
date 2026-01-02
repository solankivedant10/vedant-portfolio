"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface BookingModalProps {
    calLink?: string;
    buttonText?: string;
    buttonClassName?: string;
}

export function BookingModal({
    calLink = "vedant-solanki",
    buttonText = "Book a call",
    buttonClassName = ""
}: BookingModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className={buttonClassName || "bg-white text-black hover:bg-zinc-200 font-medium rounded-full px-8"}
                >
                    <Calendar className="mr-2 h-4 w-4" />
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] h-[700px] bg-zinc-950 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white">Schedule a Call</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                        Pick a time that works for you. I&apos;ll send you a confirmation email.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1 w-full h-full min-h-[500px]">
                    <iframe
                        src={`https://cal.com/${calLink}?embed=true&theme=dark`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-lg"
                        title="Schedule a call"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
