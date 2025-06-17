import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo1.jpeg"
                  alt="Utmost Healthcare Solutions LLC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Utmost Healthcare</h3>
                <p className="text-purple-300">Solutions LLC</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Always Caring. Always Here.</p>
            <p className="text-sm text-gray-400">Licensed and Insured</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-purple-400" />
                <div className="text-sm">
                  <a href="tel:404-449-6952" className="block hover:text-purple-300 transition-colors">
                    Office: (404) 449-6952
                  </a>
                  <a href="tel:678-740-1973" className="block hover:text-purple-300 transition-colors">
                    Mobile: (678) 740-1973
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-purple-400" />
                <a href="mailto:uhsolutionsllc@yahoo.com" className="text-sm hover:text-purple-300 transition-colors">
                  uhsolutionsllc@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <p>Clayton</p>
              <p>Cobb</p>
              <p>Coweta</p>
              <p>DeKalb</p>
              <p>Fulton</p>
              <p>Gwinnett</p>
              <p>Hall</p>
              <p>Henry</p>
              <p>Walton</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Utmost Healthcare Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
