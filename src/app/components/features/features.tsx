import MaterialSymbol from "../pieces/materialSymbol";

type FeatureProps = {
    /** Larger heading for the feature */
    title: string,
    /** Smaller description for the feature */
    description: string,
    /** Google Material symbol slug to represent an icon */
    icon: string,
};

type FeaturesProps = {
    /** Array of Features */
    features: FeatureProps[];
}

export const Feature = ({ title, description, icon }: FeatureProps) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-8 w-14 h-14 rounded-full bg-primary-content">
                <MaterialSymbol classes="text-primary" symbol={icon} size={64} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
            <p className="text-base-content">
                {description}
            </p>
        </div>
    )
}

const Features = ({ features }: FeaturesProps) => {
    return (
        <div className="space-y-24 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map(feature => (<Feature key={`feature-${feature.title}`} {...feature} />))}
        </div>
    )
}

export default Features;