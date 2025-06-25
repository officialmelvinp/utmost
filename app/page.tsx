import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Phone, Heart, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Add Header Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-red-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero image - Shows first on mobile, second on desktop */}
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full">
                  <Image
                    src="/images/bbu.png"
                    alt="Professional nurse providing compassionate care to elderly patient at home"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    priority
                    width={800}
                    height={600}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                {/* Decorative elements - hidden on mobile */}
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-purple-200 rounded-full opacity-60 hidden md:block"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-32 md:h-32 bg-red-200 rounded-full opacity-40 hidden md:block"></div>
              </div>

              {/* Text content - Shows second on mobile, first on desktop */}
              <div className="max-w-2xl order-2 lg:order-1 text-center lg:text-left">
                <div className="mb-8">
                  {/* Company Logo - Only visible on desktop */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 mb-6 hidden lg:block">
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
                    their home, while encouraging independence and preserving their dignity. We are dedicated to
                    providing exceptional family focused care for our clients.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 mb-8">
                    We have an average of 25 years of experience in various areas of skilled nursing, provided by RNs
                    and LPNs. Our CNAs&apos; practical experience and expertise in Alzheimer&apos;s Disease, Dementia,
                    Parkinson&apos;s Disease, Diabetes, Stroke and many more areas of care, ensure that the care of your
                    loved one is exceptional. Our team members and staff follow Franklin Covey The 13 Behaviors of
                    Trust.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <a
                      href="tel:678-740-1973"
                      className="bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-base md:text-lg font-semibold"
                    >
                      <Phone size={20} />
                      <span>Call (678) 740-1973</span>
                    </a>
                    <Link
                      href="/our-services"
                      className="border-2 border-purple-600 text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center space-x-2 text-base md:text-lg font-semibold"
                    >
                      <span>Our Services</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  {/* Custom Healthcare Services Badge */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-full px-6 py-3 shadow-sm">
                      <Heart className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-lg font-semibold text-purple-700">Home Healthcare Services</span>
                      <Shield className="w-5 h-5 text-purple-600 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Logo & Services Section - Enhanced for mobile */}
        <section className="bg-gradient-to-b from-white to-purple-50 py-8 lg:hidden">
          <div className="container mx-auto px-4">
            {/* Larger Logo */}
            <div className="flex justify-center mb-2">
              <div className="relative w-full h-40 max-w-md">
                <Image
                  src="/images/logo1.jpeg"
                  alt="Utmost Healthcare Solutions LLC Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700 font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                <Heart className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700 font-medium">Compassionate Care</span>
              </div>
              <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700 font-medium">Licensed & Insured</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Ready to get started?</p>
              <a
                href="tel:678-740-1973"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}
