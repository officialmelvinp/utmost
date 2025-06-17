"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)
    } catch (err) {
      console.error("Form submission error:", err)
      setSubmitResult({
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? We&apos;re here to answer your questions and discuss your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Information - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:404-449-6952"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Office: (404) 449-6952
                      </a>
                      <a
                        href="tel:678-740-1973"
                        className="block text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Mobile: (678) 740-1973
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:uhsolutionsllc@yahoo.com"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      uhsolutionsllc@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Fax</h3>
                    <p className="text-gray-600">(678) 284-9271</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Availability</h3>
                    <p className="text-gray-600">24/7 Emergency Care Available</p>
                    <p className="text-gray-600">Always here when you need us</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact - Mobile Optimized */}
              <div className="mt-8 p-4 md:p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Contact via WhatsApp</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  For immediate assistance, you can reach us on WhatsApp:
                </p>
                <a
                  href="https://wa.me/16787401973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 md:px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2 text-sm md:text-base w-full md:w-auto justify-center md:justify-start"
                >
                  <span>💬</span>
                  <span>Message us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form - Mobile Optimized */}
            <div className="order-1 lg:order-2 bg-gray-50 p-4 md:p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Send us a Message</h2>

              {/* Success Message */}
              {submitResult?.success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-green-800 text-sm md:text-base">{submitResult.message}</p>
                </div>
              )}

              {/* Error Message */}
              {submitResult && !submitResult.success && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-800 text-sm md:text-base">{submitResult.message}</p>
                </div>
              )}

              <form action={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="skilled-nursing">Skilled Nursing Services</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="companion-sitter">Companion/Sitter Services</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base disabled:opacity-50"
                    placeholder="Please describe your healthcare needs or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="text-xs md:text-sm text-gray-500 mt-4">
                * Required fields. We&apos;ll respond to your inquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Payment Options</h2>
            <p className="text-base md:text-lg text-gray-600">
              We accept various payment methods to make our services accessible
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Private Pay</h3>
                <p className="text-gray-600">We accept private payment for all our services.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Insurance Plans</h3>
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
        </div>
      </section>

      {/* Service Areas - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">We Serve These Areas</h2>
            <p className="text-base md:text-lg text-gray-600">
              Licensed and insured to serve the following Georgia counties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
            {["Clayton", "Cobb", "Coweta", "DeKalb", "Fulton", "Gwinnett", "Hall", "Henry", "Walton"].map((county) => (
              <div key={county} className="bg-white p-3 md:p-4 rounded-lg text-center shadow-sm">
                <p className="font-semibold text-gray-800 text-sm md:text-base">{county} County</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
