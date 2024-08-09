import Image from "next/image";
import Hero from "./components/heros/hero";
import Faqs from "./components/features/faqs/faqs";
//import Testimonials from "./components/testimonials";
import Steps from "./components//features/steps";
import CopyWithCallToActions from "./components/callToActions/copyWithCallToAction";
import Section, { Skew } from "./components/pieces/section";
import PricingSection from "./sections/pricing";
import { HorizontalPosition } from "./components/types/position";
import FeaturesSection from "./sections/features";
import GuaranteesSection from "./sections/guarantees";
import FAQsWithAccordion from "./components/features/faqs/faqsWithAccording";
import ImageWithTextSideBySide from "./components/features/imageWithTextSideBySide";
import appreciateIt from "./assets/images/appreciate-it.png"
import { sizes } from "./components/types/sizes";


const processSteps = [
  {
    title: "Initial consultation",
    explanation: "The first step in launching your business is a consultation call. (need to detail what will happen in the call and what we hope to accomplish.",
    position: HorizontalPosition.left,
    symbol: "partner_exchange",
  },
  {
    title: "Marketing Strategy Development",
    explanation: "Next, a marketing plan is created for your business. This marketing plan will cover may different topics, such as some ideas for unique selling points, an in depth swot analysis, buyer persona examples and walking through the marketing funnel with a unique strategy. This will also help us plan what the layout of the website will be like.",
    position: HorizontalPosition.right,
    symbol: "groups",
  },
  {
    title: "Site design and development",
    explanation: "Once the wireframe is approved, I will craft a custom design for your site and send that over for approval once more. Once you are happy with the design, the landing page will be developed.",
    position: HorizontalPosition.left,
    symbol: "web",
  },
  {
    title: "Launch",
    explanation: "The site is developed and ready for launch! The code will either be delivered or I will set the site live!",
    position: HorizontalPosition.right,
    symbol: "rocket_launch",
  },
  {
    title: "Promotion",
    explanation: "Finally, I'll create and edit a video showcasing your business. I'll talk about what makes it so great and share the video on all of my social media channels.",
    position: HorizontalPosition.left,
    symbol: "play_arrow",
  },
];

const faqs = [
  {
    question: "How long does it take to complete the Jumpstart Small Business package?",
    answer: "I don't make any guarantees on the timeline of the project because I am just one person, but one of my selling points is a speedy turnaround. I should be able to have everything done in 2-4 weeks. Sometimes, it may be even faster!",
  },
  {
    question: "What will you need from me?",
    answer: "You'll need to have a domain for the site and any pictures and videos as well. I'll ask for a few other things on our onboarding call!",
  },
  {
    question: "What makes Jumpstart Small Business different from other business launch services?",
    answer: "When I created Jumpstart Small Business, I thought of everything I wish I'd had when I started a business. There are many services that can help you create just a landing page for a similar price, but I include all of these services as well that would have greatly helped me when I started a business!",
  },
  {
    question: "What if I'm not satisfied with the services?",
    answer: "I guarantee satisfaction with the services. If for some reason you still are not happy 30 days after the delivery, I'll make it right or offer a full refund.",
  },
  {
    question: "How do you ensure the landing page is optimized for mobile devices?",
    answer: "As a software engineer, I have many years' experience optimizing websites for different layouts across different devices. I use a mobile-first development mindset, so it always looks good on the go.",
  },
  {
    question: "Can I request additional customizations after the landing page is completed?",
    answer: "As many as you'd like. I want you to love your new site!",
  },
  {
    question: "What kind of results can I expect from the marketing plan?",
    answer: "The results of the marketing plan will be dependent upon the information I receive about your business during our initial strategy meeting. It will have some cool ideas and strategies for you to grow your business.",
  },
  {
    question: "Can you help with SEO and online marketing beyond the initial setup?",
    answer: "Marketing services, including SEO are coming soon! I am waiting just a bit longer to ensure I can provide the best service possible.",
  },
  {
    question: "Can I upgrade the site to more pages, use a content management system create an e-commerce integration, integrate with another system etc?",
    answer: "Absolutely. These packages are for a landing page only, but outside of these packages, we can come to an agreement on adding more pages, connecting to a CMS, creating an e-commerce platform or whatever else your needs might be!",
  },
  {
    question: "Do you provide domain registration and hosting services?",
    answer: "You'll have to provide a domain for this and if I am setting up your site, I'll need access to your registrar.",
  },
  {
    question: "Are there any hidden fees or subscriptions?",
    answer: "No hidden fees, no subscriptions. Its a one-time payment as you see above and that's it! You will have to provide your own domain, and there are additional options for videos, hosting, help with marketing etc that we can talk about, but none are required for you to have a great site and strategy!",
  },
  {
    question: "Can I use my existing domain and hosting provider?",
    answer: "We can use your existing domain and you can use whichever hosting platform you'd like. I offer to host your site for free depending on the package for a specified time, and then after that, its a separate agreement.",
  },
  {
    question: "What if I want to make a change to my website after the project is completed?",
    answer: "Once the page is complete, changes to the page can be made as an additional service.",
  },
  {
    question: "Do you offer any analytics or performance tracking for the landing page?",
    answer: "I can set this up at your request.",
  },
  {
    question: "Is there a contract or long-term commitment required?",
    answer: "No contract and no commitment. Its a one-time payment and the site is yours forever! I include hosting for free for a specified time depending on the package, but you can host this site wherever you'd like.",
  },
];


const callToActionCopy = `
<h2 className="mb-12">
    What is Jumpstart Small Business?
</h2>
<p>
    Jumpstart Small Business is an affordable collection of services that I wished that I had when I started my business, such as a tailored landing page with a custom design, a marketing plan specific to your business, a bespoke branding kit with professional social media banners and more.
</p>
<p>
    Designed specifically for new entrepreneurs and small businesses, Jumpstart Small Business is the ultimate starter kit that provides everything you need to launch your business successfully and affordably. Experience the ease of having a dedicated team handle your business setup, allowing you to focus on what you do best.
</p>`;

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section skew={Skew["-y2"]} id="cta" theme="wsts-secondary" divId="cta-div">
        <CopyWithCallToActions copy={callToActionCopy} buttonText="Get Started" buttonLink="#pricing-cards" />
      </Section>
      <Section id="features">
        <FeaturesSection />
      </Section>
      {/*<Section id="feature-video">*/}
      {/*</Section>*/}
      <Section id="how-it-works">
        <h2 className="text-primary">Discover How Jumpstart Small Business Works</h2>
        <Steps steps={processSteps} />
      </Section>
      {/*<Section id="testimonials">*/}
      {/*<Testimonials />*/}
      {/*</Section>*/}
      <Section id="pricing">
        <PricingSection />
      </Section>
      <Section id="guarantees" theme="wsts-secondary" skew={Skew["-y2"]}>
        <GuaranteesSection />
      </Section>
      <Section id="faq">
        <FAQsWithAccordion faqs={faqs} />
      </Section>
      <Section id="final-cta">
        <ImageWithTextSideBySide
          imageSide={HorizontalPosition.left}
          copy={"<h2>Join the Community of Successful Entrepreneurs!</h2> <p>You're almost there! You've seen how our tailored solutions can help you launch and grow your business with ease. Now, take the final step to ensure your business thrives. With our comprehensive packages, you’ll have everything you need to turn your vision into reality. Don't wait – start your journey to success today!</p>"}
          image={appreciateIt}
          imageAlt="Appreciate it"
          imageSize={sizes.large}
          imageFocus="center"
          callToAction={{
            text: "Get Started Now",
            link: "#pricing-cards",
          }}
        />
      </Section>
    </>
  );
}


/*
 * To do:
 * 1. Get domain
 * 
 * For Greyson:
 * 1. How does the page look? I kind of have the info up that I want, but I know its needs more.
 * 2. How would you decide theme colors? (with my theme and in general)
 * 3. What (subtle) animations does this need? Does it need interactive elements?
 * 4. What else would you change?
 * 5. Which elements should have the "heading" font?
 * 6. How much spacing should I have between sections? Between blocks within sections?
 * 7. Sizing on headings and text
 * 8. Do you think I need a logo for this?
 * 9. What about the buttons? Other low contrast colors (look at lighthouse test) (This is related to creating a theme, related to #2).
  */