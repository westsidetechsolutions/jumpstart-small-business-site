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
import Section from "./components/section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Section>
        <Hero />
      </Section>
      <Section theme="wsts-secondary">
        <CopyWithCallToActions />
      </Section>
      <Section id="features">
        <Features />
      </Section>
      <Section id="feature-video">
        <h2 className="text-primary">Discover How Jumpstart Small Business Works</h2>
      </Section>
      <Section id="how-it-works">
        <Steps />
      </Section>
      {/*<Section id="testimonials">*/}
        {/*<Testimonials />*/}
      {/*</Section>*/}
      <Section id="pricing">
        <Pricing />
      </Section>
      <Section id="faq">
        <Faqs />        
      </Section>
      <Section id="guarantees">
        <Guarantees />
      </Section>
      <Section id="cta-1" divClasses="items-center justify-center flex my-24">
        <LinkButton link="#pricing" text="Ready to try it out?" />
      </Section>
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