"use client";

import { Phone } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden shadow-lg">
      <a
        href="tel:+19046778812"
        className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Phone className="h-6 w-6" />
        <span>Call Now - (904) 677-8812</span>
      </a>
    </div>
  );
}
