import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="max-w-2xl order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-8">
                {/* Company Logo - Increased Size */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 mb-6">
                  <Image
                    src="/images/logo1.jpeg"
                    alt="Utmost Healthcare Solutions LLC Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  Always Caring.
                  <span className="text-purple-600 block">Always Here.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Our goal is to meet each client&apos;s medical and personal needs in the nurturing environment of
                  their home, while encouraging independence and preserving their dignity. We are dedicated to providing
                  exceptional family focused care for our clients.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  We have an average of 25 years of experience in various areas of skilled nursing, provided by RNs and
                  LPNs. Our CNAs&apos; practical experience and expertise in Alzheimer&apos;s Disease, Dementia,
                  Parkinson&apos;s Disease, Diabetes, Stroke and many more areas of care, ensure that the care of your
                  loved one is exceptional. Our team members and staff follow Franklin Covey The 13 Behaviors of Trust.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href="tel:404-449-6952"
                    className="bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-base md:text-lg font-semibold"
                  >
                    <Phone size={20} />
                    <span>Call (404) 449-6952</span>
                  </a>
                  <Link
                    href="/our-services"
                    className="border-2 border-purple-600 text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center space-x-2 text-base md:text-lg font-semibold"
                  >
                    <span>Our Services</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Doctor's Name */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-1">Founded & Led by</p>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">Dr. Sade Akintunde</p>
                  <p className="text-sm text-purple-600 font-medium">Healthcare Professional & Founder</p>
                </div>
              </div>
            </div>

            {/* Right side - Hero image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/sade1.jpg"
                  alt="Professional nurse providing compassionate care to elderly patient at home"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements - hidden on mobile */}
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-purple-200 rounded-full opacity-60 hidden md:block"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-32 md:h-32 bg-red-200 rounded-full opacity-40 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
