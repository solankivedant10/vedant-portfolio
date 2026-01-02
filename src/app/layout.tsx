import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
// FIX 1: Import GlobalNavBar (which holds your links), NOT NavBar
import { GlobalNavBar } from "@/components/GlobalNavBar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vedant Solanki | Software Developer",
    template: "%s | Vedant Solanki"
  },
  description: "Software Developer specialized in building high-performance web applications, autonomous agents, and scalable AI platforms.",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Node.js", "Gemini API", "Kestra", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
          <div className="viewport-glow" />

          {/* FIX 2: Use GlobalNavBar. This component passes the 'items' prop automatically. */}
          <GlobalNavBar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}