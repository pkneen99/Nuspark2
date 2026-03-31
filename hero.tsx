import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star, Users, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
            Jacksonville Chiropractor for{" "}
            <span className="text-primary">Back Pain</span> &{" "}
            <span className="text-primary">Auto Injuries</span>
          </h1>

          {/* Trust indicators - prominent, right under headline */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <span className="text-base font-semibold text-gray-800">5-Star Rated</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold text-gray-800">1,000+ Patients Treated</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold text-gray-800">Fast Pain Relief</span>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-800 font-medium max-w-2xl mx-auto mb-3">
            Same-day appointments. Most patients feel relief after their first visit.
          </p>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            No long waits. No runaround. Get real pain relief from a trusted Jacksonville chiropractor today.
          </p>

          {/* Phone number - prominent */}
          <div className="mb-8">
            <a 
              href="tel:904-677-8812" 
              className="inline-flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-black text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              (904) 677-8812
            </a>
          </div>

          {/* CTAs - both teal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              size="lg" 
              asChild 
              className="w-full sm:w-auto text-lg font-bold px-10 py-7 bg-primary hover:bg-primary/90 text-white shadow-lg"
            >
              <a href="tel:904-677-8812" className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto text-lg font-bold px-10 py-7 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="#contact" className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* $59 Special */}
      <div className="container mx-auto px-4 mt-12 lg:mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-3">
                  <Zap className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Limited Time Offer</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  New Patient Special
                </h2>
                <p className="text-gray-600 mt-1">
                  Consultation + Exam + Treatment Plan
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center">
                  <div className="flex items-baseline gap-2 justify-center">
                    <span className="text-5xl lg:text-6xl font-black text-primary">$59</span>
                    <span className="text-xl text-gray-400 line-through">$250</span>
                  </div>
                  <p className="text-sm font-medium text-primary mt-1">
                    Save 76% Today
                  </p>
                </div>
                <Button 
                  size="lg" 
                  asChild 
                  className="text-lg font-bold px-8 py-6 bg-primary hover:bg-primary/90 text-white"
                >
                  <a href="#contact">
                    Book Appointment Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
