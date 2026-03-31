import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Stethoscope, Target, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Consultation",
    description:
      "We&apos;ll discuss your health history, current symptoms, and goals. This helps us understand your unique situation and expectations.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Examination",
    description:
      "A thorough physical examination including posture analysis, range of motion tests, and any necessary diagnostic imaging.",
  },
  {
    number: "03",
    icon: Target,
    title: "Treatment Plan",
    description:
      "Based on our findings, we&apos;ll create a personalized treatment plan tailored to your specific needs and recovery timeline.",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Begin Treatment",
    description:
      "Start your first adjustment and begin your journey to better health. We&apos;ll monitor your progress and adjust as needed.",
  },
];

export function WhatToExpect() {
  return (
    <section id="what-to-expect" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            New Patients
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What to Expect on Your First Visit
          </h2>
          <p className="text-muted-foreground">
            We make your first appointment easy and stress-free. Here&apos;s what you can 
            expect when you visit NuSpark Chiropractic.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-border" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="#contact" className="flex items-center gap-2">
              Schedule Your First Visit
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
