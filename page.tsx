import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhatToExpect } from "@/components/what-to-expect";
import { Conditions } from "@/components/conditions";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhatToExpect />
      <Conditions />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
