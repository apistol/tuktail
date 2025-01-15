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
                    <p className={"font-grotesk m-10"}>Adauga o nota de stil italian petrecerii tale cu Aperol Spritz, cocktailul vibrant din Veneto! Cu origini in anii 1950 si o istorie legata de cultura „aperitivo”, aceasta bautura racoritoare combina perfect vinul spumant, Aperolul si apa minerala. Gustul sau echilibrat, intre amar si dulce, dar si culoarea atragatoare il fac unul dintre cele mai iubite cocktailuri. Alege Aperol Spritz pentru a aduce farmecul Italiei direct la petrecerea ta!</p>
                </div>s
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
                    <p className={"font-grotesk m-10"}>Transforma orice petrecere intr-un brunch de lux cu Mimosa, bautura eleganta inventata in 1925 la Paris! Perfecta pentru toasturi si celebrari, combinatia de sampanie si suc proaspat de portocale ofera un echilibru ideal intre rafinament si prospetime. Simplu, dar sofisticat, Mimosa este alegerea perfecta pentru momentele speciale alaturi de prieteni. Alege sa ridici nivelul petrecerii tale cu acest clasic atemporal!</p>
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
                    <p className={"font-grotesk m-10"}>Surprinde-ti invitatii cu un cocktail sofisticat si revigorant – Hugo! Creat in 2005 in Tirolul de Sud, acest mix delicios de prosecco, sirop de soc, apa minerala si menta proaspata este perfect pentru serile calduroase si nu numai. Cu aroma sa florala si prospetimea inconfundabila, Hugo este bautura care transforma orice petrecere intr-un moment memorabil. Alege Hugo pentru a aduce o briza de prospetime la evenimentul tau!</p>
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
                    <h3 className={"text-4xl text-center font-grotesk font-bold"}>Prosecco</h3>
                    <p className={"font-grotesk m-10"}>Fa din petrecerea ta o adevarata sarbatoare cu Prosecco, vinul spumant italian renumit pentru aroma sa fructata si florala! Originar din Veneto, Prosecco aduce o nota festiva si un gust racoritor care se potriveste perfect oricarei ocazii. Fie ca il savurezi simplu sau in cocktailuri precum Aperol Spritz sau Hugo, Prosecco este esenta rafinamentului italian. Alege-l pentru un toast memorabil si o atmosfera de neuitat!</p>

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