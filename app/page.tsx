import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}
