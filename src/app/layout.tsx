import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNavBar } from "@/components/GlobalNavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Replace with your actual domain when deployed
  metadataBase: new URL("https://vedantsolanki.vercel.app"),

  title: {
    default: "Vedant Solanki | Software Developer",
    template: "%s | Vedant Solanki"
  },
  description: "Software Developer specialized in building high-performance web applications, autonomous agents, and scalable AI platforms.",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Node.js", "Gemini API", "Kestra", "Tailwind CSS"],
  authors: [{ name: "Vedant Solanki" }],
  creator: "Vedant Solanki",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vedant Solanki",
    title: "Vedant Solanki | Software Developer",
    description: "Building autonomous agents and scalable web apps.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vedant Solanki",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
        <GlobalNavBar />
        {children}
      </body>
    </html>
  );
}