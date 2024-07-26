import Features from "../components/features/features";
import HtmlRenderer from "../components/pieces/htmlRenderer";

const features = [
    {
        title: "Fast turnaround",
        description: "Unlike when working with an agency, you won't be waiting several weeks or even months.",
        icon: "bolt",
    },
    {
        title: "Flexible Options",
        description: "Don't have the budget right now? We offer 3 options to accomodate your needs.",
        icon: "savings",
    },
    {
        title: "High-Quality, Custom Design",
        description: "Receive a professionally designed landing page tailored to your brand, providing a polished and effective online presence.",
        icon: "design_services",
    },
    {
        title: "Attention to Detail",
        description: "Everything you get is custom made for your business and its unique needs.",
        icon: "tune",
    },
    {
        title: "Mobile Optimized",
        description: "Ensure your website looks and performs perfectly on any device, providing a seamless experience for all users.",
        icon: "smartphone",
    },
    {
        title: "Clear Representation of Your Brand",
        description: "Custom landing pages designed to clearly convey your product and company message, helping you stand out in the market and share your message.",
        icon: "storefront",
    },
    {
        title: "No \"One Size Fits All\"",
        description: "No extra charges for additional CTAs, images, or banners like with other agencies – we build a page that perfectly suits your needs.",
        icon: "recommend",
    },
    {
        title: "Custom Where it Needs to be",
        description: "Need a payment form? A form from your CRM? Since these sites are custom made, they can be created with custom functionality.",
        icon: "web",
    },
    {
        title: "Made for Small business by Small Business",
        description: "I know what its like to run a small business, and everything in this offer is something that I wish I'd had when I started my business.",
        icon: "partner_exchange",
    },
];

const html = `
<h2>
    Guidance and Deliverables for your Business
</h2>
<p>
    I go the extra mile to make sure the quality of what I deliver is the best possible
</p>`;

const FeaturesSection = () => {
    return (
        <>
            <HtmlRenderer htmlString={html} />
            <Features features={features} />
        </>
    )
}

export default FeaturesSection;