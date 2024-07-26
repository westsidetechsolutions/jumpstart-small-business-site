import Pricing from "../components/callToActions/pricing/pricing";
import PricingIcons from "../components/callToActions/pricing/pricingIcons";

const plans = [
    {
        "planName": "Essentials",
        "price": "549",
        "features": [
            "Up to one hour onboarding all",
            "Custom marketing plan",
            "Hand crafted landing page design and development",
        ],
        "link": "https://buy.stripe.com/test_dR65lA1tv5Ga4eY8wx",
    },
    {
        "planName": "Pro",
        "price": "749",
        "features": [
            "Everything in \"Essentials\"",
            "A year of hosting",
            "A video by me overviewing and promoting your business, posted to all of my social media accounts",
            "\"Starting Your Business\" checklist",
        ],
        "link": "https://buy.stripe.com/test_14kbJY1tv6KedPy288",
        "theme": "wsts-secondary",
    },
    {
        "planName": "Elite",
        "price": "999",
        "features": [
            "Everything in \"Pro\"",
            "A custom logo",
            "Branding kit (colors, typography, alternate color logo etc.) for your business",
            "Social media profile picture (of your branding)",
            "Social media banners for all platforms",
        ],
        "link": "https://buy.stripe.com/test_5kA9BQ7RT8Sm26Q002",
    }
];

const PricingSection = () => {
    return (
        <div className="py-8 lg:py-16">
            <div className="mx-auto mb-8 lg:mb-12">
                <h2 className="mb-4 text-primary">
                    Designed for business teams like yours
                </h2>
                <p className="mb-5 text-base-content">
                    Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                </p>
            </div>
            <Pricing plans={plans}/>
            <div className="mt-12">
                <PricingIcons />
            </div>
        </div>
    )
}

export default PricingSection;