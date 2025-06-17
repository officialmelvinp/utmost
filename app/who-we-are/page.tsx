import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Award, Users, Clock } from "lucide-react"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of healthcare professionals committed to providing exceptional care in the comfort of your
            home.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Utmost Healthcare Solutions LLC was founded with a simple yet powerful mission: to provide exceptional
                  healthcare services in the comfort and familiarity of our clients&apos; homes.
                </p>
                <p>
                  We have an average of 25 years of experience in various areas of skilled nursing, provided by RNs and
                  LPNs. Our CNAs&apos; practical experience and expertise in Alzheimer&apos;s Disease, Dementia,
                  Parkinson&apos;s Disease, Diabetes, Stroke and many more areas of care, ensure that the care of your
                  loved one is exceptional. Our team members and staff follow Franklin Covey The 13 Behaviors of Trust.
                </p>
                <p>
                  We believe that the best care happens when clients feel safe, comfortable, and respected in their own
                  environment, surrounded by the people and things they love most.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/sade2.jpg"
                  alt="Dr. Sade Akintunde and healthcare team providing compassionate care"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Optional decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">Our commitment to exceptional care</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To provide quality home care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To empower and enhance our clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To maintain confidence and independence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">To create a homely environment</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Provide secure health care assistance and delivery</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Commitment and dedication to our clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Establish good human relationships</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    Provide services based on the principles of love, respect, and communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
                Care based on principles of love, respect, and genuine concern for our clients&apos; wellbeing.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to providing the highest quality of care with attention to every detail.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family-Focused</h3>
              <p className="text-gray-600">
                We treat every client as family, involving loved ones in the care process.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Always here when you need us, providing consistent and dependable care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Experienced Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare professionals bring decades of experience and a passion for providing exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Registered Nurses (RNs)</h3>
              <p className="text-gray-600">
                Highly skilled professionals providing comprehensive nursing assessments, wound care, IV therapy, and
                specialized medical care.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Licensed Practical Nurses (LPNs)</h3>
              <p className="text-gray-600">
                Experienced nurses providing medication management, basic medical care, and ongoing health monitoring.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Certified Nursing Assistants (CNAs)</h3>
              <p className="text-gray-600">
                Compassionate caregivers assisting with daily activities, personal care, and providing companionship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
