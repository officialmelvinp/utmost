import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Utmost Healthcare Solutions LLC - Home Healthcare Services in Georgia",
  description:
    "Professional home healthcare services in Georgia. Skilled nursing, personal care, and companion services. Licensed and insured with 25+ years experience.",
  keywords: "home healthcare, skilled nursing, personal care, Georgia healthcare, home care services",
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
