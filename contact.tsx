"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "4567 Beach Boulevard, Suite 101",
    subValue: "Jacksonville, FL 32246",
    href: "https://maps.google.com/?q=4567+Beach+Boulevard+Jacksonville+FL+32246",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(904) 677-8812",
    href: "tel:904-677-8812",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nusparkchiro.com",
    href: "mailto:info@nusparkchiro.com",
  },
];

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("[v0] Form submitted:", formData);
    alert("Thank you for your message! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Ready to Start Feeling Better?
          </h2>
          <p className="text-muted-foreground">
            Schedule your appointment today or reach out with any questions. 
            We&apos;re here to help you on your journey to wellness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(904) 555-1234"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.label === "Address" ? "_blank" : undefined}
                  rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground">{info.value}</p>
                    {info.subValue && (
                      <p className="font-medium text-foreground">
                        {info.subValue}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium text-foreground">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Note */}
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              For same-day appointments, please call us directly at{" "}
              <a href="tel:904-677-8812" className="text-primary hover:underline">
                (904) 677-8812
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
