import React from "react";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { Link as ScrollableLink } from "react-scroll";
import Image from "next/image";
import getIsMobile from "@/components/utils/isMobile";

function Advantages() {
    const isMobile = getIsMobile(); // Determine if the screen size is mobile

    // List of advantages
    const advantages = [
        {
            id: "advantage1",
            title: "01 Convenienta si flexibilitate",
            description:"Usor de amplasat in orice locatie, fie ca petrecerea este in aer liber sau intr-un spatiu inchis.",
            nextId: "advantage2",
        },
        {
            id: "advantage2",
            title: "02 Personalizare",
            description:"Poti adapta meniul de bauturi in functie de preferintele invitatilor. (Vezi sectiunea de mai jos)",
            nextId: "advantage3",
        },
        {
            id: "advantage3",
            title: "03 Atmosfera friendly",
            description:"Sociabili, tineri si cu un vibe bun, aducem un plus atmosferei de la evenimentul tau.",
            nextId: "impact",
        },
    ];

    return (
        <div
            id={"advantages"}
            className={`relative ${isMobile ? "flex flex-col" : "flex min-h-screen flex-row"} align-middle`}
        >
            {/* Image Section */}
            <div className={`${isMobile ? "h-screen m-10 relative" : "lg:w-3/5 h-full flex justify-center align-middle"}`}>
                <h2 className={"hidden"}>3 motive pentru care sa ne chemi la evenimentul tau</h2>
                <Image
                    alt={"Avantaje Tuk"}
                    width={500}
                    height={500}
                    className={`${isMobile ? "h-full" : "mt-32"}`}
                    src={"./advantages-motive.svg"}
                />
                {isMobile && (
                    <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                        <ScrollableLink
                            to={advantages[0].id}
                            smooth={true}
                            duration={500}
                            className={"text-xl text-white text-center cursor-pointer font-mono"}
                        >
                            <ScrollAnimation />
                        </ScrollableLink>
                    </div>
                )}
            </div>

            {/* Text Section */}
            <div
                className={`${
                    isMobile
                        ? "flex flex-col justify-center align-middle m-10"
                        : "lg:w-2/5 h-full flex flex-col justify-center align-middle px-12 gap-16 py-20"
                }`}
            >
                {advantages.map((advantage) => (
                    <div key={advantage.id} id={isMobile ? advantage.id : ""} className={isMobile ? "h-screen flex" +
                        " flex-col justify-center relative" : "h-50"}>
                        <h3 className={"font-mono text-4xl mb-6"}>{advantage.title}</h3>
                        <p className={"font-grotesk text-2xl"}>{advantage.description}</p>
                        {isMobile && advantage.nextId && (
                            <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                                <ScrollableLink
                                    to={advantage.nextId}
                                    smooth={true}
                                    duration={500}
                                    className={"text-xl text-white text-right cursor-pointer font-mono"}
                                >
                                    <ScrollAnimation />
                                </ScrollableLink>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Navigation for Desktop */}
            {!isMobile && (
                <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                    <ScrollableLink
                        to="impact"
                        smooth={true}
                        duration={500}
                        className={"text-xl text-white text-right cursor-pointer font-mono"}
                    >
                        <ScrollAnimation />
                    </ScrollableLink>
                </div>
            )}
        </div>
    );
}

export default Advantages;
