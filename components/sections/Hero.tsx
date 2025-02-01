import React, { useEffect } from 'react';
import { gsap } from 'gsap';


function Hero() {

    useEffect(() => {
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = "#advantages";
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power4.inOut" });
    };

    return (
        <div id={"intro"} className={"h-screen relative hero-bg"}>
            <div className={"h-full flex flex-row"}>
                <div className={"lg:w-1/3 hero-bg_transparent"}>
                    <div className={"h-full flex flex-col justify-center relative"}>
                        <div className={"mx-10"}>
                            <h1 className={"text-3xl lg:text-5xl text-white font-grotesk animate-fadeUp"}>Prosecco Bar, Lemonade Bar si Cocktail Bar pentru Nunti, Botezuri si Evenimente Private</h1>
                        </div>
                        <div className={"absolute bottom-32 right-5"}>
                            <a
                                onClick={handleScroll}
                                className={"text-xl text-white w-full h-20 text-right cursor-pointer font-mono mx-4 mb-8"}
                            >
                                <p className={"animate-fadeUp"}>MERGI MAI DEPARTE</p>
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
