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

export const Collapse = ({ question, answer }: FaqProps) => {
    return (
        <div className="collapse collapse-arrow bg-base-100 p-8 md:p-12">
            <input type="radio" name={`faq-prop-${question}`} />
            <h3 className="collapse-title">{question}</h3>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>
    )
}

const FAQsWithAccordion = ({ faqs }: FaqsProps) => {
    return (
        <div className="space-y-16">
            {faqs.map((faq, index) => {
                return <Collapse {...faq} key={`collapse-faq-${index}`} />
            })}
        </div>
    )
}

export default FAQsWithAccordion;