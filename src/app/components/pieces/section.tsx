import React, { FC, ReactNode } from 'react';

export enum Skew {
    "y1"  = "skew-y-1",
    "y2"  = "skew-y-2",
    "y3"  = "skew-y-3",
    "y6"  = "skew-y-6",
    "y12" = "skew-y-12",
    "-y1"  = "-skew-y-1",
    "-y2"  = "-skew-y-2",
    "-y3"  = "-skew-y-3",
    "-y6"  = "-skew-y-6",
    "-y12" = "-skew-y-12",
}

type SectionProps = {
    /** React children to render inside of the section */
    children: ReactNode;
    /** Id meant to be set on the section element */
    id?: string;
    /** Classes to be set on the first child of the section, a div which comes with this element */
    divClasses?: string;
    /** Classes to be set on the section */
    sectionClasses?: string;
    /** Optional daisyui theme name that the section and children should take on */
    theme?: string;
    /** Skew amount to change the edge of the section for a visual effect. Goes well with choosing a theme */
    skew?: Skew;
    /** The id for the containing div to take */
    divId?: string;
}

const getDivSkew = (skew: Skew) => {
    if (skew.indexOf('-') !== -1) {
        return skew.replace('-', '');
    }
    return `-${skew}`;
}

const Section: FC<SectionProps> = ({ children, id, divClasses, sectionClasses, theme, skew, divId }) => {
    return (
        <section {...(id ? { id } : {})} className={`${sectionClasses ? sectionClasses : ''} ${skew ? skew : ''}`} {...(theme ? { 'data-theme': theme } : {})}>
            <div {...(divId ? { id: divId } : {})} className={`secton-container ${divClasses} ${skew ? getDivSkew(skew) : ''}`} >{children}</div>
        </section>
    )
}

export default Section;
