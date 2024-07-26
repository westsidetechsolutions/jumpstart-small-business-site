import { FaqProps, FaqsProps } from "../types";

const Collapse = ({ question, answer }: FaqProps) => {
    return (
        <div className="collapse collapse-arrow bg-base-100">
            <input type="radio" name={`faq-prop-${question}`} defaultChecked />
            <div className="collapse-title text-xl">{question}</div>
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