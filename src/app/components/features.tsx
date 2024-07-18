import MaterialSymbol from "./materialSymbol";

type FeatureProps = {
    feature: {
        title: string,
        description: string,
        icon: string,
    }
};

const Feature = (props: FeatureProps) => {
    const { feature } = props;
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-content lg:h-12 lg:w-12">
                {/*<svg className="w-5 h-5 text-primary lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>*/}
                {/*</svg>*/}
                <MaterialSymbol classes="text-primary" symbol={feature.icon}/>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">{feature.title}</h3>
            <p className="text-secondary">
                {feature.description}
            </p>
        </div>
    )
}

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
]

const Features = () => {
    return (
        <div className="py-8 mx-auto sm:py-16">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-primary">
                    Guidance and Deliverables for your Business
                </h2>
                <p className="text-secondary">
                    I go the extra mile to make sure the quality of what I deliver is the best possible
                </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {features.map(feature => (<Feature key={`feature-${feature.title}`} feature={feature} />))}
            </div>
        </div>
    )
}

export default Features;