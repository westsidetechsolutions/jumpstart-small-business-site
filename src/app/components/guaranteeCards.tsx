import MaterialSymbol from "./materialSymbol"

type GuaranteeProps = {
    title: string,
    description: string,
    symbol: string,
};

const Guarantee = ({ title, description, symbol } : GuaranteeProps) => {
    return (
        <div className="w-80 bg-white p-6 rounded-lg shadow-md">
            <MaterialSymbol classes="text-primary" symbol={symbol} size={40} />
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="mt-2">
                {description}
            </p>
        </div>
    )
}

const guarantees = [
    {
        title: "Satisfaction Guarantee",
        symbol: "sentiment_satisfied",
        description: "If you're not completely satisfied with my services, I'll work with you to make it right or offer a refund within the first 30 days.",
    },
    {
        title: "Quality Guarantee",
        symbol: "verified",
        description: "I guarantee that your landing page and branding materials will meet the highest standards of design and functionality.",
    },
    {
        title: "No Hidden Fees Guarantee",
        symbol: "visibility_off",
        description: "The price you see is the price you pay. There are no surprise charges or additional costs.",
    },
    {
        title: "Customization Guarantee",
        symbol: "settings",
        description: "Your landing page and branding will be fully customized to reflect your unique business needs and goals.",
    },
];

const Guarantees = () => {
    return (
        <>
            <h2 className="text-primary">My Guarantees to You</h2>
            <p className="mb-12">I stand by the quality and effectiveness of these services. Here are my promises to ensure your satisfaction and peace of mind.</p>
            <div className="flex flex-wrap justify-center gap-8">
                {guarantees.map((guarantee, index) => {
                    return <Guarantee {...guarantee} key={`guarantee-${index}`} />
                })}
            </div>
        </>
    )
}

export default Guarantees;