import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Franklin | Software Developer Portfolio",
  description:
    "Explore the professional portfolio of Franklin, a passionate and experienced software developer and backend Engineer. Specializing in modern web development, and scalable code.",
  generator: "v0.dev",
  keywords: [
    "Franklin",
    "Franklin Portfolio",
    "Software Developer Portfolio",
    "Web Developer",
    "Mobile app Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "React Developer",
    "GitHub Projects",
  ],
  authors: [{ name: "Franklin", url: "https://yourdomain.com" }],
  creator: "Franklin",
  publisher: "Franklin",
  openGraph: {
    title: "Franklin | Software Developer Portfolio",
    description:
      "Explore the sleek and modern portfolio of Franklin, showcasing software projects, skills, and experience in web development.",
    url: "https://yourdomain.com",
    siteName: "Franklin Portfolio",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} cz-shortcut-listen="true">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
