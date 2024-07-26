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