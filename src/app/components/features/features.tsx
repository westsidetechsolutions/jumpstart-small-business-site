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
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-content lg:h-12 lg:w-12">
                <MaterialSymbol classes="text-primary" symbol={icon} />
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
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map(feature => (<Feature key={`feature-${feature.title}`} {...feature} />))}
        </div>
    )
}

export default Features;