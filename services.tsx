import { Button } from "@/components/ui/button";
import { ArrowRight, Bone, Droplets, Car } from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Chiropractic Adjustments",
    description:
      "Precise spinal adjustments to restore proper alignment, reduce nerve interference, and promote natural healing. Our techniques are gentle yet effective for patients of all ages.",
    benefits: [
      "Improved spinal alignment",
      "Reduced nerve pressure",
      "Enhanced mobility",
      "Natural pain relief",
    ],
  },
  {
    icon: Droplets,
    title: "Hydrotherapy Massage",
    description:
      "Therapeutic water-based massage to relax muscles, improve circulation, and accelerate recovery. Perfect as a complement to chiropractic adjustments.",
    benefits: [
      "Deep muscle relaxation",
      "Improved blood flow",
      "Reduced inflammation",
      "Stress relief",
    ],
  },
  {
    icon: Car,
    title: "Auto Injury Care",
    description:
      "Specialized treatment for whiplash, soft tissue injuries, and other auto accident-related conditions. We work with insurance companies and provide thorough documentation.",
    benefits: [
      "Whiplash treatment",
      "Insurance assistance",
      "Thorough documentation",
      "Complete recovery plan",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Comprehensive Care for Your Wellness Journey
          </h2>
          <p className="text-muted-foreground">
            From routine adjustments to specialized auto injury treatment, we offer a 
            full range of services to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" asChild className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                <a href="#contact" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
