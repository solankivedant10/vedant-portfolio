"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const ContactSection = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        projectType: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (type: string, checked: boolean) => {
        setFormData((prev) => {
            const currentTypes = prev.projectType;
            return checked
                ? { ...prev, projectType: [...currentTypes, type] }
                : { ...prev, projectType: currentTypes.filter((t) => t !== type) };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thanks for reaching out! (Demo)");
    };

    const projectTypeOptions = [
        'Website', 'Mobile App', 'Web App', 'E-Commerce',
        'Brand Identity', '3D & Animation', 'Marketing',
        'Consulting', 'Other'
    ];

    return (
        <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-background py-24">
            {/* Background & Bubbles */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-primary/10 rounded-full animate-bubble opacity-0"
                        style={{
                            width: `${Math.random() * 50 + 20}px`,
                            height: `${Math.random() * 50 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Side: Title */}
                    <div className="flex flex-col justify-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                            We can turn your <span className="text-primary">dream project</span> into reality.
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                            Whether you need a stunning website, a complex web app, or a complete brand overhaul, we are ready to build it.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-muted-foreground">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:hello@aniketh.xyz" className="hover:text-primary transition-colors">hello@aniketh.xyz</a>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" asChild><a href="#"><Twitter className="w-4 h-4" /></a></Button>
                                <Button variant="outline" size="icon" asChild><a href="#"><Instagram className="w-4 h-4" /></a></Button>
                                <Button variant="outline" size="icon" asChild><a href="#"><Linkedin className="w-4 h-4" /></a></Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-2xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-6">Let&apos;s talk! 👋</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Tell us about your project</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="I want to build a..."
                                    className="min-h-[100px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-3">
                                <Label>I&apos;m interested in...</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {projectTypeOptions.map((option) => (
                                        <div key={option} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={option}
                                                checked={formData.projectType.includes(option)}
                                                onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                                            />
                                            <Label htmlFor={option} className="text-sm font-normal cursor-pointer">{option}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button type="submit" className="w-full size-lg text-lg">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};
