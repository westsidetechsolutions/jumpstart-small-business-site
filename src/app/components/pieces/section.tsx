import React, { FC, ReactNode } from 'react';

export enum Skew {
    y1  = "skew-y-1",
    y2  = "skew-y-2",
    y3  = "skew-y-3",
    y6  = "skew-y-6",
    y12 = "skew-y-12",
}


//skew-y-1
//skew-y-2
//skew-y-3
//skew-y-6
//skew-y-12

type SectionProps = {
    children: ReactNode;
    id?: string;
    divClasses?: string;
    sectionClasses?: string;
    theme?: string;
    skew?: Skew;
}

const Section: FC<SectionProps> = ({ children, id, divClasses, sectionClasses, theme, skew }) => {
    return (
        <section {...(id ? { id } : {})} className={`${sectionClasses ? sectionClasses : ''} ${skew ? skew : ''}`} {...(theme ? { 'data-theme': theme } : {})}>
            <div className={`secton-container ${divClasses} ${skew ? `-${skew}` : ''}`} >{children}</div>
        </section>
    )
}

export default Section;
