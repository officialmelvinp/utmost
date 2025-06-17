import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Stethoscope, Users, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OurServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 pt-12 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions delivered with compassion and expertise in the comfort of your home.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skilled Nursing Services */}
            <div className="bg-white border-2 border-purple-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Stethoscope className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2 text-center lg:text-left">Skilled Nursing Services</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <li>• RN Assessment and Education</li>
                <li>• Post-Surgical/Wound Care</li>
                <li>• Special Skilled Care - Pediatrics</li>
                <li>• IV Therapy</li>
                <li>• Medication Management</li>
                <li>• Health Monitoring and Assessment</li>
              </ul>
              <p className="text-sm text-gray-500">
                Professional medical care provided by licensed registered nurses with extensive experience.
              </p>
            </div>

            {/* Personal Care */}
            <div className="bg-white border-2 border-red-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Heart className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2 text-center lg:text-left">Personal Care</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <li>• Bathing and Grooming</li>
                <li>• Meal Preparation and Planning</li>
                <li>• Activities of Daily Living</li>
                <li>• Transportation Services</li>
                <li>• Mobility Assistance</li>
                <li>• Personal Hygiene Support</li>
              </ul>
              <p className="text-sm text-gray-500">
                Compassionate assistance with daily activities to maintain independence and dignity.
              </p>
            </div>

            {/* Companion Services */}
            <div className="bg-white border-2 border-purple-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2 text-center lg:text-left">Companion/Sitter Services</h3>
              <ul className="space-y-2 text-gray-600 text-sm mb-4">
                <li>• Accompany to Appointments</li>
                <li>• Pick up Prescriptions</li>
                <li>• Medication Reminders</li>
                <li>• Light Housekeeping</li>
                <li>• Social Companionship</li>
                <li>• Safety Supervision</li>
              </ul>
              <p className="text-sm text-gray-500">
                Friendly companionship and assistance to enhance quality of life and provide peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pt-12 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Service Areas</h2>
            <p className="text-lg text-gray-600">We proudly serve the following counties in Georgia</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {["Clayton", "Cobb", "Coweta", "DeKalb", "Fulton", "Gwinnett", "Hall", "Henry", "Walton"].map((county) => (
              <div key={county} className="bg-white p-3 rounded-md text-center shadow-sm text-sm font-medium text-gray-700">
                {county}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Payment Options</h2>
            <p className="text-lg text-gray-600">Flexible payment options to meet your needs</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg text-center md:text-left">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Private Pay</h3>
                <p className="text-gray-600 text-sm">
                  We accept private payment for all our healthcare services, providing you with flexible options.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Insurance Coverage</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm">
                  <li>Peach State Plan</li>
                  <li>United Healthcare</li>
                  <li>Special State/Federal waiver programs - SOURCE, CCSP, and ICWP</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm">
              Contact us to verify your insurance coverage and discuss payment options that work best for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Our Services?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your specific healthcare needs and learn how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:678-740-1973"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-base font-semibold"
            >
              <Phone size={18} />
              <span>Call 678-740-1973</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2 text-base font-semibold"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
