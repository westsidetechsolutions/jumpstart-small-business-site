import Image from "next/image";
import Hero from "./components/hero";
import Faqs from "./components/faqs";
import Testimonials from "./components/testimonials";
import Steps from "./components/steps";
import Pricing from "./components/pricing";
import CopyWithCallToActions from "./components/copyWithCallToAction";
import Features from "./components/features";
import Guarantees from "./components/guaranteeCards";
import LinkButton from "./components/linkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section>
        <Hero />
      </section>
      <section>
        <CopyWithCallToActions />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="feature-video">
        <h2 className="text-primary">Discover How Jumpstart Small Business Works</h2>
      </section>
      <section id="how-it-works">
        <Steps />
      </section>
      <section id="testimonials">
        {/*<Testimonials />*/}
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <Faqs />        
      </section>
      <section id="guarantees">
        <Guarantees />
      </section>
      <section id="cta-1" className="items-center justify-center flex my-24">
        <LinkButton link="#pricing" text="Ready to try it out?" />
      </section>
    </main>
  );
}


/*
 * To do:
 * 1. Connect Stripe
 * 2. Add payment badges to pricing part
 * 3. Record and add videos
 * 4. Get domain
 * 
  */