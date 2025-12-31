import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNavBar } from "@/components/GlobalNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aniketh Pawar | Full Stack Developer",
    template: "%s | Aniketh Pawar"
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building digital experiences that matter.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Aniketh Pawar" }],
  creator: "Aniketh Pawar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aniketh.xyz",
    siteName: "Aniketh Pawar",
    title: "Aniketh Pawar | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniketh Pawar | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    creator: "@aniketh_pawar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navigation */}
        <GlobalNavBar />

        {/* Subtle Grid Background */}
        <div className="fixed inset-0 grid-bg pointer-events-none" />

        {children}
      </body>
    </html>
  );
}
