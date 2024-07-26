import CardsWithIconInCorner from "../components/features/cardWithIconInCorner";

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

const GuaranteesSection = () => {
    return (
        <>
            <h2 className="text-primary">My Guarantees to You</h2>
            <p className="mb-12">I stand by the quality and effectiveness of these services. Here are my promises to ensure your satisfaction and peace of mind.</p>
            <CardsWithIconInCorner cards={guarantees} />
        </>
    )
}

export default GuaranteesSection;