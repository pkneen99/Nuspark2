import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#what-to-expect", label: "New Patients" },
  { href: "#conditions", label: "Conditions" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Chiropractic Adjustments",
  "Hydrotherapy Massage",
  "Auto Injury Care",
  "Sports Injury Treatment",
  "Posture Correction",
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                Nu<span className="text-primary">Spark</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Your trusted partner for chiropractic care and auto injury treatment 
              in Jacksonville, FL. Helping you live life without pain.
            </p>
            <div className="space-y-3">
              <a
                href="tel:904-677-8812"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                (904) 677-8812
              </a>
              <a
                href="mailto:info@nusparkchiro.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@nusparkchiro.com
              </a>
              <a
                href="https://maps.google.com/?q=4567+Beach+Boulevard+Jacksonville+FL+32246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  4567 Beach Boulevard, Suite 101
                  <br />
                  Jacksonville, FL 32246
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Mon - Fri</span>
                <span className="text-foreground">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Saturday</span>
                <span className="text-foreground">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sunday</span>
                <span className="text-foreground">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} NuSpark Chiropractic & Auto Injury. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
