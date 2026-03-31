import { Award, Heart, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Care",
    description: "Licensed chiropractors with advanced certifications",
  },
  {
    icon: Heart,
    title: "Patient-Focused",
    description: "Personalized treatment plans for your unique needs",
  },
  {
    icon: Shield,
    title: "Safe & Effective",
    description: "Evidence-based techniques with proven results",
  },
  {
    icon: Users,
    title: "Community Trusted",
    description: "Serving Jacksonville families for over a decade",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6 text-balance">
              Your Partners in Pain Relief and Wellness
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At NuSpark Chiropractic & Auto Injury, we believe everyone deserves to live 
                without pain. Our Jacksonville clinic combines cutting-edge techniques with 
                compassionate care to help you achieve optimal health.
              </p>
              <p>
                Whether you&apos;re recovering from an auto accident, dealing with chronic back 
                pain, or looking to improve your overall wellness, our experienced team is 
                here to guide you every step of the way.
              </p>
              <p>
                We take a holistic approach to chiropractic care, addressing not just your 
                symptoms but the root cause of your discomfort. Our goal is to restore your 
                body&apos;s natural ability to heal itself.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
