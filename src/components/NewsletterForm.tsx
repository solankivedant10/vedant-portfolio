"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setEmail("");
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-center">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">You&apos;re on the list! 🚀</h3>
                <p className="text-zinc-400">Thanks for subscribing. Keep an eye on your inbox.</p>
                <Button
                    variant="ghost"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20"
                >
                    Add another email
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-8 md:p-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
            <div className="text-center space-y-4 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 mb-2">
                    <Mail className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Get Notified</h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                    Be the first to know when I publish new articles. No spam, unsubscribe anytime.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-950/50 border-zinc-800 focus:ring-purple-500/20 text-white placeholder:text-zinc-600"
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-black hover:bg-zinc-200 font-medium"
                >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Notify Me"}
                </Button>
            </form>
        </div>
    );
}
