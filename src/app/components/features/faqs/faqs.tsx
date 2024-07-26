import MaterialSymbol from "../../pieces/materialSymbol";

export type FaqProps = {
    /** Question for the FAQ */
    question: string,
    /** Answer for the FAQ */
    answer: string,
}

export type FaqsProps = {
    /**
     * Takes an array of FaqProps:
     */
    faqs: FaqProps[];
}

export const Faq = ({ question, answer} : FaqProps) => {
    return (
        <div>
            <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-primary">
                    <MaterialSymbol symbol="question_mark" classes="text-secondary text-xl" size={22} />
                    <span className="ml-4">
                        {question}
                    </span>
                </h3>
                <p className="text-base-content">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const Faqs = ({ faqs } : FaqsProps) => {
    return (
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
            <h2 className="mb-8 text-primary">Frequently asked questions</h2>
            <div className="grid pt-8 text-left border-t border-base-300 md:gap-16 md:grid-cols-2">
                {faqs.map((question, index) => {
                    return <Faq key={`FAQ-${index}`} {...question} />
                })}
            </div>
        </div>
    );
};

export default Faqs;
