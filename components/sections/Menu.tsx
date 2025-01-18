import React from 'react';
import Image from "next/image";
import {useEventContext, menuItems} from "@/components/context";
import smoothScrollToSection from "@/components/utils/smoothScrollToSection";

function Menu() {
    const {addOne} = useEventContext();


    return (
        <div className={"flex flex-col relative"}>
            <h2 id={"menu"} className={"text-center text-2xl lg:text-5xl font-grotesk"}>MENIURI</h2>
            {menuItems.map((item, index) => (
                <div key={item.id}
                     id={String(item.id)}
                     className={"h-full lg:h-[80vh] flex flex-col lg:flex-row justify-center align-middle"}>
                    <div className={"lg:w-1/3 flex flex-col justify-center mb-10 lg:mb-0"}>
                        <h3 className={"text-4xl text-center font-grotesk font-bold"}>{item.title}</h3>
                        <p className={"font-grotesk m-10"}>{item.description}</p>
                    </div>
                    <Image
                        src={item.imageSrc}
                        alt={item.title}
                        className={"w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0"}
                        width={364}
                        height={577}
                        style={{objectFit: 'contain'}}
                    />
                    <div className={"w-full lg:w-1/3 flex flex-col justify-center align-middle"}>
                        <button
                            className={"text-center custom-button w-40 mx-auto"}
                            onClick={() => {
                                const selectedItem = menuItems[index];
                                addOne({
                                    id:selectedItem.id,
                                    name: selectedItem.title,
                                    qty: 1
                                });
                            }}
                        >
                            Imi place
                        </button>
                        {item.nextId && (
                            <button
                                className={"text-center custom-button-oulined w-40 mx-auto"}
                                onClick={() => smoothScrollToSection(item.nextId)}
                            >
                                Urmatorul
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
