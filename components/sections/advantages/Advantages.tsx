import React from 'react';
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import {Link as ScrollableLink} from 'react-scroll';
import AdvantagesMobile from "@/components/sections/advantages/AdvantagesMobile";
import Image from "next/image";


function Advantages() {
    return (
        <>
        <div id={"advantages"} className={"hidden lg:block lg:h-screen relative lg:flex flex-row align-middle "}>

            <div className={"my-32 lg:w-3/5 h-full flex align-middle justify-center"}>
                <Image width={500} height={500} alt={"Avantaje Tuk"} className={"w-2/3"} src={"./advantages-motive.svg"}/>
            </div>


            <div className={"lg:w-2/5 "}>
                <div className={"h-full flex flex-col justify-center align-middle px-12 gap-16"}>
                    <div>
                        <h3 className={"font-mono text-4xl"}>01 Convenienta si flexibilitate </h3>
                        <p  className={"font-grotesk text-2xl"}>Usor de amplasat in orice locatie, fie ca petrecerea este in aer liber sau intr-un spatiu
                            inchis.</p>
                    </div>
                    <div>
                        <h3 className={"font-mono text-4xl"}>02 Personalizare </h3>
                        <p  className={"font-grotesk text-2xl"}>Poti adapta meniul de bauturi in functie de preferintele invitatilor. (Vezi sectiunea de mai
                            jos.)</p>
                    </div>
                    <div>
                        <h3 className={"font-mono text-4xl"}>03 Atmosfera friendly</h3>
                        <p  className={"font-grotesk text-2xl"}>Sociabili, tineri si cu un vibe bun, aducem un plus atmosferei de la evenimentul tau.</p>
                    </div>
                </div>
            </div>


            <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                <ScrollableLink to="impact" smooth={true} duration={500}
                                className={"text-xl text-white text-right cursor-pointer font-mono"}>
                    <ScrollAnimation/>
                </ScrollableLink>
            </div>
        </div>

            <AdvantagesMobile/>
        </>
    );
}

export default Advantages;

