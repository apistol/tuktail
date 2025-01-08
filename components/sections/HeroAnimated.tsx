import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import Image from "next/image";

gsap.registerPlugin(SplitText);

const HeroAnimated = () => {
    const quotesRef = useRef<NodeListOf<Element> | null>(null);

    const setupSplits = () => {
        quotesRef.current?.forEach((quote) => {
            const quoteElement = quote as HTMLElement & { anim?: gsap.core.Tween, split?: SplitText };

            // Reset if needed
            if (quoteElement.anim) {
                quoteElement.anim.progress(1).kill();
                quoteElement.split?.revert();
            }

            quoteElement.split = new SplitText(quoteElement, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            // Set up the anim
            quoteElement.anim = gsap.from(quoteElement.split.chars, {
                scrollTrigger: {
                    trigger: quoteElement,
                    toggleActions: "restart pause resume reverse",
                    start: "center center",
                    markers: { startColor: "#dfdcff", endColor: "transparent" }
                },
                duration: 1.3,
                ease: "circ.out",
                y: 80,
                stagger: 0.02
            });
        });
    };

    useEffect(() => {
        quotesRef.current = document.querySelectorAll(".quote");
        setupSplits();
    }, []);

    return (
        <div id={""} className={"fold fold1 h-screen"}>
            <div className="wrap">
                <div className="quote" style={{ overflow:"hidden"}}>ORGANIZEAZA
                    PETRECEREA
                    PERFECTA</div>
            </div>
            <Image src={"./round-hero.png"} alt={"placeholder"} className={"m-auto"}/>
        </div>
    );
};

export default HeroAnimated;