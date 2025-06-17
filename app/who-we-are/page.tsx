import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Award, Users, Clock } from "lucide-react"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-red-50 py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of healthcare professionals committed to providing exceptional care in the comfort of your
            home.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-center md:text-left">
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
                  src="/images/bb.jpg"
                  alt="Dr. Sade Akintunde and healthcare team providing compassionate care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-10 md:py-20 bg-purple-50 text-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600">Our commitment to exceptional care</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left md:text-center">
              <div className="space-y-2 md:space-y-4">
                {[
                  "To provide quality home care",
                  "To empower and enhance our clients",
                  "To maintain confidence and independence",
                  "To create a homely environment"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 md:space-y-4">
                {[
                  "Provide secure healthcare assistance and delivery",
                  "Commitment and dedication to our clients",
                  "Establish good human relationships",
                  "Provide services based on the principles of love, respect, and communication"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10 md:py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Heart className="text-purple-600" size={32} />,
                title: "Compassion",
                desc: "Care based on principles of love, respect, and genuine concern for our clients' wellbeing.",
                bg: "bg-purple-100"
              },
              {
                icon: <Award className="text-red-600" size={32} />,
                title: "Excellence",
                desc: "Committed to providing the highest quality of care with attention to every detail.",
                bg: "bg-red-100"
              },
              {
                icon: <Users className="text-purple-600" size={32} />,
                title: "Family-Focused",
                desc: "We treat every client as family, involving loved ones in the care process.",
                bg: "bg-purple-100"
              },
              {
                icon: <Clock className="text-red-600" size={32} />,
                title: "Reliability",
                desc: "Always here when you need us, providing consistent and dependable care.",
                bg: "bg-red-100"
              }
            ].map(({ icon, title, desc, bg }, i) => (
              <div key={i} className="text-center p-6">
                <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-10 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Experienced Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare professionals bring decades of experience and a passion for providing exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Registered Nurses (RNs)",
                desc: "Highly skilled professionals providing comprehensive nursing assessments, wound care, IV therapy, and specialized medical care.",
                color: "text-purple-600"
              },
              {
                role: "Licensed Practical Nurses (LPNs)",
                desc: "Experienced nurses providing medication management, basic medical care, and ongoing health monitoring.",
                color: "text-red-600"
              },
              {
                role: "Certified Nursing Assistants (CNAs)",
                desc: "Compassionate caregivers assisting with daily activities, personal care, and providing companionship.",
                color: "text-purple-600"
              }
            ].map(({ role, desc, color }, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className={`text-2xl font-semibold ${color} mb-4`}>{role}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
