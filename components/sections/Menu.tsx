import React, {useRef} from 'react';
import Image from "next/image";
import {Link as ScrollableLink} from "react-scroll";

function Menu() {

    const anchorRef = useRef<HTMLHeadingElement>(null);


    return (
        <div className={"flex flex-col relative"}>

            <h2 id={"menu"} className={"text-center text-2xl lg:text-5xl font-grotesk"}>MENIURI</h2>

            <div className={"h-screen flex flex-col lg:flex-row justify-center align-middle"}>
                <div className={"lg:w-1/3 flex flex-col justify-center mb-10 lg:mb-0"}>
                    <h3 className={"text-4xl text-center font-grotesk font-bold"}>Aperol Spritz</h3>

                    <p className={"font-grotesk m-10"}>Lichior ușor, cu un conținut redus de alcool, care să fie ideal pentru a fi savurat ca aperitiv. Rețeta include o combinație de ierburi, rădăcini, portocală amară și alte ingrediente naturale.</p>
                </div>
                <Image src={"/aperol-spritz.png"}
                       alt={"Aperol Sprtiz"}
                       className={"w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0"}
                       width={364}
                       height={577}
                       style={{objectFit: 'contain'}}
                />
                <div className={"w-full lg:w-1/3 flex flex-col justify-center align-middle"}>
                    <button className={"text-center custom-button w-40 mx-auto"}>Imi place</button>
                    <button className={"text-center custom-button-oulined w-40 mx-auto"}>Urmatorul</button>
                </div>
            </div>


            <div className={"h-screen flex flex-col lg:flex-row justify-center align-middle"}>
                <div className={"lg:w-1/3 flex flex-col justify-center mb-10 lg:mb-0"}>
                    <h3 className={"text-4xl text-center font-grotesk font-bold"}>Mimosa</h3>
                    <p className={"font-grotesk m-10"}>Mimosa a fost inventată în 1925 de un barman francez de la Hôtel Ritz din Paris. Băutură mai ușoară utilizează suc de portocale proaspăt stors și un vin spumant de calitate.</p>
                </div>
                <Image src={"/mimosa.png"}
                       alt={"Mimosa"}
                       className={"w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0"}
                       width={364}
                       height={577}
                       style={{objectFit: 'contain'}}
                />
                <div className={"w-full lg:w-1/3 flex flex-col justify-center align-middle"}>
                    <button className={"text-center custom-button w-40 mx-auto"}>Imi place</button>
                    <button className={"text-center custom-button-oulined w-40 mx-auto"}>Urmatorul</button>
                </div>
            </div>


            <div className={"h-screen flex flex-col lg:flex-row justify-center align-middle"}>
                <div className={"lg:w-1/3 flex flex-col justify-center mb-10 lg:mb-0"}>
                    <h3 className={"text-4xl text-center font-grotesk font-bold"}>Hugo</h3>
                </div>
                <Image src={"/hugo.png"}
                       alt={"Hugo"}
                       className={"w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0"}
                       width={364}
                       height={577}
                       style={{objectFit: 'contain'}}
                />
                <div className={"w-full lg:w-1/3 flex flex-col justify-center align-middle"}>
                    <button className={"text-center custom-button w-40 mx-auto"}>Imi place</button>
                    <button className={"text-center custom-button-oulined w-40 mx-auto"}>Urmatorul</button>
                </div>
            </div>


            <div className={"h-screen flex flex-col lg:flex-row justify-center align-middle"}>
                <div className={"lg:w-1/3 flex flex-col justify-center mb-10 lg:mb-0"}>
                    <h3 className={"text-4xl text-center font-grotesk font-bold"}>Prossecco</h3>
                </div>
                <Image src={"/prosseco.png"}
                       alt={"Prosecco"}
                       className={"w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0"}
                       width={364}
                       height={577}
                       style={{objectFit: 'contain'}}
                />
                <div className={"w-full lg:w-1/3 flex flex-col justify-center align-middle"}>
                    <button className={"text-center custom-button w-40 mx-auto"}>Imi place</button>
                    <button className={"text-center custom-button-oulined w-40 mx-auto"}>Urmatorul</button>
                </div>
            </div>


            <div className={"absolute bottom-5 right-5"}>
                <ScrollableLink to="advantages" smooth={true} duration={500}
                                className={"text-xl text-white text-right cursor-pointer font-mono mx-4 mb-8" +
                                    " font-mono"}>
                    <span className={"opacity-0"} ref={anchorRef}>MERGI MAI DEPARTE</span>
                </ScrollableLink>
            </div>
        </div>
    );
}

export default Menu;