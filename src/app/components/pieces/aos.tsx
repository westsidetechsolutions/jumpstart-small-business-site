"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const addAosAttributes = (selector: string, animation: string) => {
    const elements = document.querySelectorAll(selector);
    console.log("elements");
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-aos", animation)
    }
};

const AosComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        addAosAttributes(".timeline-start", "fade-right");
        addAosAttributes(".timeline-end", "fade-left");
        addAosAttributes("#cta-div", "fade-down");
    })
    return <></>
}

export default AosComponent;