import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    condition: "Back Pain Recovery",
    rating: 5,
    text: "After years of chronic back pain, I finally found relief at NuSpark. The team took the time to understand my condition and created a treatment plan that actually worked. I can now play with my kids without constant pain!",
  },
  {
    name: "Michael T.",
    condition: "Auto Accident Injury",
    text: "I was in a car accident and didn't know where to turn. NuSpark handled everything from my treatment to working with my insurance. Six weeks later, I'm back to normal. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    condition: "Migraine Relief",
    rating: 5,
    text: "I've suffered from migraines for over a decade. Traditional medicine only masked the symptoms. After chiropractic care at NuSpark, my migraines have reduced from weekly to maybe once a month. Life-changing!",
  },
  {
    name: "David K.",
    condition: "Sports Injury",
    rating: 5,
    text: "As a weekend warrior, I was dealing with constant shoulder pain. The combination of adjustments and hydrotherapy massage got me back on the golf course faster than I expected. Great team!",
  },
  {
    name: "Lisa P.",
    condition: "Neck Pain",
    rating: 5,
    text: "Years of desk work left me with terrible neck pain and headaches. The staff at NuSpark is incredibly professional and caring. After just a few visits, I noticed significant improvement.",
  },
  {
    name: "Robert H.",
    condition: "Sciatica Treatment",
    rating: 5,
    text: "The shooting pain down my leg was unbearable. I was skeptical about chiropractic care, but NuSpark proved me wrong. The relief I've experienced is nothing short of amazing. Thank you!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Patient Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Real Stories from Real Patients
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our patients have to say 
            about their experience at NuSpark Chiropractic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9/5</span>
            <span className="text-muted-foreground">from 200+ Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
