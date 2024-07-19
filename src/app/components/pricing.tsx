import LinkButton from "./linkButton"
import MaterialSymbol from "./materialSymbol"

type PricingCardProps = {
    plan: {
        planName: string,
        price: string,
        features: Array<string>,
        link: string,
    }
}

const PricingCard = (props: PricingCardProps) => {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-primary bg-base-100 rounded-lg border border-base-300 shadow xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">{props.plan.planName}</h3>
            <p className="text-base-content">
                Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">${props.plan.price}<span className="text-base">.99</span></span>
            </div>
            {/* List */}
            <div className="h-full flex flex-col justify-between">
            <ul role="list" className="mb-8 space-y-4 text-left">
                {props.plan.features.map((feature, index) => {
                    return (
                        <li className="flex items-center space-x-3" key={`feature-${index}-${props.plan.planName}`}>
                            <MaterialSymbol classes="text-accent" symbol="check" />
                            <span className="text-base-content">{feature}</span>
                        </li>
                    )
                })}
            </ul>
            <LinkButton link={props.plan.link} text="Buy Now" />
            </div>
        </div>
    )
}

const plans = {
    "essentials": {
        "planName": "Essentials",
        "price": "549",
        "features": [
            "Up to one hour onboarding all",
            "Custom marketing plan",
            "Hand crafted landing page design and development",
        ],
        "link": "https://buy.stripe.com/test_dR65lA1tv5Ga4eY8wx",
    },
    "pro": {
        "planName": "Pro",
        "price": "749",
        "features": [
            "Everything in \"Essentials\"",
            "A year of hosting",
            "A video by me overviewing and promoting your business, posted to all of my social media accounts",
            "\"Starting Your Business\" checklist",
        ],
        "link": "https://buy.stripe.com/test_14kbJY1tv6KedPy288",
    },
    "elite": {
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
}

const Pricing = () => {
    return (
            <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
                        Designed for business teams like yours
                    </h2>
                    <p className="mb-5 text-base-content">
                        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <PricingCard plan={plans["essentials"]} />
                <PricingCard plan={plans["pro"]} />
                <PricingCard plan={plans["elite"]} />
                </div>
            </div>
    )
}

export default Pricing;
