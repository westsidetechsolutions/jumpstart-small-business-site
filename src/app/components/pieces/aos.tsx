"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const addAosAttributes = (selector: string, animation: string) => {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-aos", animation)
    }
};

const AosComponent = () => {
    useEffect(() => {
        addAosAttributes(".timeline-start", "fade-right");
        addAosAttributes(".timeline-end", "fade-left");
        //addAosAttributes("#cta", "fade-down");
        AOS.init({
            duration: 800
        });
    })
    return <></>
}

export default AosComponent;