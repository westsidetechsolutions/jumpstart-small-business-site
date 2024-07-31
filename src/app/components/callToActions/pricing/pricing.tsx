import LinkButton from "../../pieces/Button"
import MaterialSymbol from "../../pieces/materialSymbol"

type PricingCardProps = {
    /**The title of this plan*/
    planName: string,

    /** The price of this plan*/
    price: string,

    /** A descriptive list of features describing this plan*/
    features: Array<string>,
    
    /** The link (href) for the button click for this plan */
    link: string,

    /** An optional theme prop. The card can take a theme (daisyui) to take. Good for highlighting a specific card */
    theme?: string,
}

type PricingProps = {
    /**
     * An array of PricingCardProps to render out onto the page
     * type PricingCardProps = {
     * 
     *   The title of this plan
     *   planName: string,
     *
     *   The price of this plan
     *   price: string,
     * 
     *   A descriptive list of features describing this plan
     *   features: Array<string>,
     * 
     *   The link (href) for the button click for this plan
     *   link: string,
     * }
     */
    plans: PricingCardProps[];
}

export const PricingCard: React.FC<PricingCardProps>  = ({ planName, price, features, link, theme }: PricingCardProps) => {
    return (
        <div {...(theme ? { "data-theme": theme } : {})} className="flex flex-col p-6 mx-auto max-w-lg text-center text-primary bg-base-100 rounded-lg border border-base-300 shadow xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">{planName}</h3>
            <p className="text-base-content">
                Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">${price}<span className="text-base">.99</span></span>
            </div>
            <div className="h-full flex flex-col justify-between">
                <ul role="list" className="mb-8 space-y-4 text-left">
                    {features.map((feature, index) => {
                        return (
                            <li className="flex items-center space-x-3" key={`feature-${index}-${planName}`}>
                                <MaterialSymbol classes="text-accent" symbol="check" />
                                <span className="text-base-content">{feature}</span>
                            </li>
                        )
                    })}
                </ul>
                <LinkButton link={link} text="Buy Now" />
            </div>
        </div>
    )
}

const Pricing = ({ plans } : PricingProps) => {
    return (
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0" id="pricing-cards">
            {plans.map((plan, index) => {
                return <PricingCard {...plan} key={`pricing-plan-${plan.planName}`} />;
            })}
        </div>
    )
}

export default Pricing;
