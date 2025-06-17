"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo1.jpeg"
                alt="Utmost Healthcare Solutions LLC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-800">Utmost Healthcare</h1>
              <p className="text-xs md:text-sm text-purple-600">Solutions LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/who-we-are" className="text-gray-700 hover:text-purple-600 transition-colors">
              Who We Are
            </Link>
            <Link href="/our-services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <a
              href="tel:404-449-6952"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/who-we-are"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link
                href="/our-services"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:404-449-6952"
                className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm font-semibold mt-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
