import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Stethoscope, Users, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OurServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions delivered with compassion and expertise in the comfort of your home.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skilled Nursing Services */}
            <div className="bg-white border-2 border-purple-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Skilled Nursing Services</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  RN Assessment and Education
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Post-Surgical/Wound Care
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Special Skilled Care - Pediatrics
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  IV Therapy
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Medication Management
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Health Monitoring and Assessment
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Professional medical care provided by licensed registered nurses with extensive experience.
              </p>
            </div>

            {/* Personal Care */}
            <div className="bg-white border-2 border-red-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Personal Care</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Bathing and Grooming
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Meal Preparation and Planning
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Activities of Daily Living
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Transportation Services
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Mobility Assistance
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Personal Hygiene Support
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Compassionate assistance with daily activities to maintain independence and dignity.
              </p>
            </div>

            {/* Companion/Sitter Services */}
            <div className="bg-white border-2 border-purple-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Companion/Sitter Services</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Accompany to Appointments
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Pick up Prescriptions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Medication Reminders
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Light Housekeeping
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Social Companionship
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Safety Supervision
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Friendly companionship and assistance to enhance quality of life and provide peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">We proudly serve the following counties in Georgia</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {["Clayton", "Cobb", "Coweta", "DeKalb", "Fulton", "Gwinnett", "Hall", "Henry", "Walton"].map((county) => (
              <div key={county} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="font-semibold text-gray-800">{county}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Payment Options</h2>
            <p className="text-xl text-gray-600">Flexible payment options to meet your needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Private Pay</h3>
                <p className="text-gray-600">
                  We accept private payment for all our healthcare services, providing you with flexible options.
                </p>
              </div>

              <div className="bg-red-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-red-600 mb-4">Insurance Coverage</h3>
                <div className="text-left">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Centipede</li>
                    <li>• Univita - Peach State Plan</li>
                    <li>• United Healthcare</li>
                    <li>• Special State/Federal waiver programs</li>
                    <li>• SOURCE, CCSP and ICWP</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                Contact us to verify your insurance coverage and discuss payment options that work best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific healthcare needs and learn how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:404-449-6952"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <Phone size={20} />
              <span>Call (404) 449-6952</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
