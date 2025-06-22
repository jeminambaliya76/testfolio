import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Purvi Patel – Full Stack Developer",
  description: "Interactive portfolio with an AI-powered avatar that shares my projects, experience, and skills.",
  keywords: [
    "Purvi Patel", 
    "Portfolio", 
    "Full Stack Developer", 
    "React", 
    "Next.js", 
    "Node.js",
    "MongoDB",
    "Web Development",
    "Software Engineer",
    "Freelance Developer"
  ],
  authors: [
    {
      name: "Purvi Patel",
      url: "https://patelpurvi.com", // ← Replace with your real domain
    },
  ],
  creator: "Purvi Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://patelpurvi.com", // ← Replace with your real domain
    title: "Purvi Patel – Full Stack Developer",
    description: "Modern web apps built with React, Node.js, and passion.",
    siteName: "Purvi Patel Portfolio",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}