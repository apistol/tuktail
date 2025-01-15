import React from 'react';
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import {Link as ScrollableLink} from 'react-scroll';
import Image from "next/image";


function AdvantagesMobile
() {
    return (
        <div id={"advantagesMobile"} className={"lg:hidden flex flex-col justify-center align-middle"}>

            <div className={"h-screen flex flex-col justify-center align-middle m-10 relative"}>
                <Image alt={"Avantaje Tuk"} width={500} height={500} className={"h-full"} src={"./advantages-motive.svg"}/>
                <div className={"flex flex-row justify-end absolute left-0 right-0 bottom-10"}>
                    <ScrollableLink to="advantage1" smooth={true} duration={500}
                                    className={"text-xl text-white text-right cursor-pointer font-mono"}>
                        <ScrollAnimation/>
                    </ScrollableLink>
                </div>
            </div>

            <div id={"advantage1"} className={"h-screen flex flex-col justify-center align-middle m-10 relative"}>
                <h3 className={"font-mono text-4xl mb-6"}>01 Convenienta si flexibilitate </h3>
                <p className={"font-grotesk text-2xl"}>Usor de amplasat in orice locatie, fie ca petrecerea este in
                    aer liber sau intr-un spatiu
                    inchis.</p>
                <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                    <ScrollableLink to="advantage2" smooth={true} duration={500}
                                    className={"text-xl text-white text-right cursor-pointer font-mono"}>
                        <ScrollAnimation/>
                    </ScrollableLink>
                </div>
            </div>
            <div id={"advantage2"}  className={"h-screen flex flex-col justify-center align-middle m-10 relative"}>
                <h3 className={"font-mono text-4xl mb-6"}>02 Personalizare </h3>
                <p className={"font-grotesk text-2xl"}>Poti adapta meniul de bauturi in functie de preferintele
                    invitatilor. (Vezi sectiunea de mai
                    jos.)</p>
                <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-10"}>
                    <ScrollableLink to="advantage3" smooth={true} duration={500}
                                    className={"text-xl text-white text-right cursor-pointer font-mono"}>
                        <ScrollAnimation/>
                    </ScrollableLink>
                </div>
            </div>
            <div id={"advantage3"}  className={"h-screen flex flex-col justify-center align-middle m-10 relative"}>
                <h3 className={"font-mono text-4xl mb-6"}>03 Atmosfera friendly</h3>
                <p className={"font-grotesk text-2xl"}>Sociabili, tineri si cu un vibe bun, aducem un plus
                    atmosferei de la evenimentul tau.</p>
                <div className={"flex flex-row justify-center absolute left-0 right-0 bottom-0"}>
                    <ScrollableLink to="impact" smooth={true} duration={500}
                                    className={"text-xl text-white text-right cursor-pointer font-mono"}>
                        <ScrollAnimation/>
                    </ScrollableLink>
                </div>
            </div>

        </div>
    );
}

export default AdvantagesMobile
;

