import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {SplitText} from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

function Hero() {

    const h3Ref = useRef<HTMLHeadingElement>(null);
    const anchorRef = useRef<HTMLHeadingElement>(null);
    const tl = useRef<gsap.core.Timeline>();


    // animation for text reveal
    useEffect(() => {
        const mySplitText = new SplitText(h3Ref.current, {type: "words,chars"});
        const chars = mySplitText.chars;

        const mySplitAnchorText = new SplitText(anchorRef.current, {type: "words,chars"});
        const anchorChars = mySplitAnchorText.chars

        gsap.set(h3Ref.current, {perspective: 400, opacity: 0});
        gsap.set(anchorRef.current, {perspective: 400, opacity: 0});

        tl.current = gsap.timeline()
            .set(h3Ref.current, {opacity: 1}) // Ensure text becomes visible before animation
            .from(chars, {
                delay: 0.5,
                duration: 0.8,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                // transformOrigin: "0% 50% -50",
                ease: "back",
                stagger: 0.01
            })
            .set(anchorRef.current, {opacity: 1}) // Ensure text becomes visible before animation
            .from(anchorChars, {
                delay: 1,
                duration: 0.8,
                opacity: 1,
                y: 50,
                ease: "power2.out"
            });
    }, []);


    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = window.innerWidth < 1024 ? "#advantagesMobile" : "#advantages";
        gsap.to(window, {duration: 1, scrollTo: target, ease: "power4.inOut"});
    };

    return (
        <div id={"intro"} className={"h-screen relative hero-bg"}>
            <div className={"h-full flex flex-row"}>
                <div className={"lg:w-1/3 hero-bg_transparent"}>
                    <div className={"h-full flex flex-col justify-center relative"}>
                        <div className={"mx-10"}>
                            <h3 ref={h3Ref} className={"text-5xl text-white font-grotesk opacity-0"}>Ridica la urmatorul
                                nivel cele mai
                                importante evenimente din viata ta</h3>
                        </div>
                        <div className={"absolute bottom-5 right-5"}>
                            <a
                                onClick={handleScroll}
                                className={"text-xl text-white w-full h-20 text-right cursor-pointer font-mono mx-4" +
                                    " mb-8"}
                            >
                                <span className={"opacity-0"} ref={anchorRef}>MERGI MAI DEPARTE</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"lg:w-1/3"}></div>
                <div className={"lg:w-1/3"}></div>
            </div>
        </div>
    );
}

export default Hero;