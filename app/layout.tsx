import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.urutmost.com"), // Add this line
  title: "Utmost Healthcare Solutions LLC - Home Healthcare Services in Georgia",
  description:
    "Professional home healthcare services in Georgia. Skilled nursing, personal care, and companion services. Licensed and insured with 25+ years experience.",
  keywords: "home healthcare, skilled nursing, personal care, Georgia healthcare, home care services",
  openGraph: {
    title: "Utmost Healthcare Solutions LLC",
    description: "Compassionate home healthcare services in Georgia.",
    url: "https://www.urutmost.com",
    siteName: "Utmost Healthcare",
    images: [
      {
        url: "/images/logo1.jpeg", // Updated path to match your images folder
        width: 1200,
        height: 630,
        alt: "Utmost Healthcare - Home Nursing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utmost Healthcare Solutions LLC",
    description: "25+ years of trusted home healthcare in Georgia.",
    images: ["/images/logo1.jpeg"], // Updated path to match your images folder
  },
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
