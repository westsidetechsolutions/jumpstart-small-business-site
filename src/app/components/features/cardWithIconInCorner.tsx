import MaterialSymbol from "../pieces/materialSymbol"

type CardWithIconInCornerProps = {
    /** Larger title text for the guarantee */
    title: string,
    /** Smaller text to serve as description */
    description: string,
    /** Google Material Symbol slug to be used to render out the icon in the corner of the card */
    symbol: string,
};

type CardsWithIconInCornerProps = {
    /** Array of cards */
    cards: CardWithIconInCornerProps[];
}

export const CardWithIconInCorner = ({ title, description, symbol } : CardWithIconInCornerProps) => {
    return (
        <div className="w-full bg-accent p-6 rounded-lg shadow-md">
            <MaterialSymbol classes="text-secondary" symbol={symbol} size={40} />
            <h3 className="text-xl font-semibold text-secondary mt-4">{title}</h3>
            <p className="mt-2 text-accent-content">
                {description}
            </p>
        </div>
    )
}

const CardsWithIconInCorner = ({ cards } : CardsWithIconInCornerProps) => {
    return (
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            {cards.map((card, index) => {
                return <CardWithIconInCorner {...card} key={`guarantee-${index}`} />
            })}
        </div>
    )
}

export default CardsWithIconInCorner;