import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sana Hafeez Portfolio",
  description: "Software Engineering Student & Aspiring Developer - Creating beautiful digital experiences",
  keywords: ["Sana Hafeez", "Software Engineer", "Portfolio", "Web Developer", "Student", "Pakistan"],
  authors: [{ name: "Sana Hafeez" }],
  creator: "Sana Hafeez",
  openGraph: {
    title: "Sana Hafeez Portfolio",
    description: "Software Engineering Student & Aspiring Developer - Creating beautiful digital experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Hafeez Portfolio",
    description: "Software Engineering Student & Aspiring Developer - Creating beautiful digital experiences",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
