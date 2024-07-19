import React, { FC, ReactNode } from 'react';

type SectionProps = {
    children: ReactNode;
    id?: string;
    divClasses?: string;
    sectionClasses?: string;
    theme?: string;
}

const Section: FC<SectionProps> = ({ children, id, divClasses, sectionClasses, theme }) => {
    return (
        <section {...(id ? { id } : {})} {...(sectionClasses ? { className: sectionClasses } : {})} {...(theme ? { 'data-theme': theme } : {})}>
            <div {...(divClasses ? { className: divClasses } : {})}>{children}</div>
        </section>
    )
}

export default Section;
