import MaterialSymbol from "./materialSymbol";

type FaqProps = {
    question: string,
    answer: string,
}

const Faq = ({ question, answer} : FaqProps) => {
    return (
        <div>
            <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-primary">
                    <MaterialSymbol symbol="question_mark" classes="text-secondary text-xl" size={22} />
                    <span className="ml-4">
                        {question}
                    </span>
                </h3>
                <p className="text-base-content">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const questions = [
    {
        question: "How long does it take to complete the Jumpstart Small Business package?",
        answer:"I don't make any guarantees on the timeline of the project because I am just one person, but one of my selling points is a speedy turnaround. I should be able to have everything done in 2-4 weeks. Sometimes, it may be even faster!",
    },
    {
        question: "What makes Jumpstart Small Business different from other business launch services?",
        answer: "When I created Jumpstart Small Business, I thought of everything I wish I'd had when I started a business. There are many services that can help you create just a landing page for a similar price, but I include all of these services as well that would have greatly helped me when I started a business!",
    },
    {
        question: "What if I’m not satisfied with the services?",
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
        answer: "Yes. I don't offer SEO services quite yet, but I can help with marketing outside of these packages",
    },
    {
        question: "Can I upgrade the site to more pages or use a content management system?",
        answer: "Absolutely. These packages are for a landing page only, but outside of these packages, we can come to an agreement on adding more pages, connecting to a CMS or whatever else your needs might be!",
    },
    {
        question: "Do you provide domain registration and hosting services?",
        answer: "You'll have to provide a domain for this and if I am setting up your site, I'll need access to your registrar. I can host your landing page for free forever!",
    },
    {
        question: "Are there any hidden fees or subscriptions?",
        answer: "No hidden fees, no subscriptions. Its a one-time payment as you see above and that's it!",
    },
    {
        question: "Can I use my existing domain and hosting provider?",
        answer: "We can use your existing domain and you can use whatever hosting platform you'd like, or I can host it for free with the Pro or Elite Packages.",
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
        answer: "No contract and no commitment. Its a one-time payment and the site is yours forever!",
    },
];

const Faqs = () => {
    return (
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
            <h2 className="mb-8 text-primary">Frequently asked questions</h2>
            <div className="grid pt-8 text-left border-t border-base-300 md:gap-16 md:grid-cols-2">
                {questions.map((question, index) => {
                    return <Faq key={`FAQ-${index}`} {...question} />
                })}
            </div>
        </div>
    );
};

export default Faqs;
