import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
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
  // FIX: Added metadataBase to resolve the build warning
  metadataBase: new URL('https://vedantsolanki.com'), // Replace with your actual domain when live
  title: {
    default: "Vedant Solanki | Software Developer",
    template: "%s | Vedant Solanki"
  },
  description: "Software Developer specialized in building high-performance web applications, autonomous agents, and scalable AI platforms.",
  keywords: ["Software Developer", "React", "Next.js", "TypeScript", "Node.js", "Gemini API", "Kestra", "Tailwind CSS"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vedantsolanki.com",
    siteName: "Vedant Solanki Portfolio",
  },
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
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* Background Layering */}
          <div className="fixed inset-0 grid-bg pointer-events-none -z-10" />
          <div className="viewport-glow" />

          <GlobalNavBar />

          {/* Added a min-h-screen to ensure the footer stays at bottom on short pages */}
          <main className="min-h-screen relative z-10">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}