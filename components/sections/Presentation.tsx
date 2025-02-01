import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Presentation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const img1Ref = useRef<HTMLImageElement>(null);
    const img2Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.fromTo(img1Ref.current,
            {x: -200, opacity: 0},
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            }
        );

        gsap.fromTo(img2Ref.current,
            {x: 200, opacity: 0},
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            }
        );
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = "#menu";
        gsap.to(window, {duration: 1, scrollTo: target, ease: "power4.inOut"});
    };

    return (
        <>
            <div id={"impact"} ref={containerRef} className="fold fold3 relative" style={{minHeight: "100vh"}}>
                <h4 className={"text-5xl font-mono text-center my-10"}>CUM ARATA TUKURILE?</h4>
                <div className={"flex flex-col lg:flex-row"}>
                    <div className={"flex-1 flex"}>
                        <Image alt={"Tuk1"}
                               ref={img1Ref}
                               width={500}
                               height={500}
                               className={"contain-content"}
                               src={"/tuk1.png"}
                               style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                    </div>
                    <div className={"flex-1 flex"}>
                        <Image alt={"Tuk2"}
                               ref={img2Ref}
                               width={500}
                               height={500}
                               className={"contain-content"}
                               src={"/tuk2.png"}
                               style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                    </div>
                </div>


            </div>

            <div
                className={"flex flex-row justify-center"}
            >
                <a onClick={handleScroll}
                   className={"text-xl text-white text-right cursor-pointer font-mono z-10"}>
                    <ScrollAnimation/>
                </a>
            </div>
        </>
    );
}

export default Presentation;