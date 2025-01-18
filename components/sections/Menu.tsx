import React from 'react';
import Image from "next/image";
import {useEventContext, menuItems} from "@/components/context";
import smoothScrollToSection from "@/components/utils/smoothScrollToSection";
import InfoIcon from "@mui/icons-material/Info";
import getIsMobile from "@/components/utils/isMobile";
import {IconButton, Tooltip} from "@mui/material";

function Menu() {

    const {addOne} = useEventContext();
    const isMobile = getIsMobile();

    const getDrinkDescription = (index: number) => {
        return isMobile ? (
            <div className={"flex justify-center font-grotesk m-10"}>
                <p>{menuItems[index].shortDescription} </p>
                <Tooltip title={menuItems[index].description}>
                    <IconButton>
                        <InfoIcon className={"info-icon"}/>
                    </IconButton>
                </Tooltip>
            </div>
        ) : (
            <p className={"font-grotesk m-10"}>{menuItems[index].description} </p>
        )
    }

    return (
        <div className={"flex flex-col relative"}>
            <h2 id={"menu"} className={"text-center text-2xl lg:text-5xl font-grotesk"}>
                Cu ce ti-ai rasfata invitatii?
            </h2>
            {menuItems.map((item, index) => (
                <div key={item.id}
                     id={menuItems[index].currentId}
                     className={"h-screen flex flex-col lg:flex-row justify-center align-middle"}>
                    <div className={"lg:w-1/3 flex flex-col justify-center lg:mb-0"}>
                        <h3 className={"text-4xl text-center font-grotesk font-bold"}>{menuItems[index].title}</h3>
                        {getDrinkDescription(index)}
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
                            className={"text-center custom-button w-72 mx-auto"}
                            onClick={() => {
                                const selectedItem = menuItems[index];
                                addOne({
                                    id: selectedItem.id,
                                    name: selectedItem.title,
                                    qty: 1
                                });
                                smoothScrollToSection(menuItems[index].nextId)
                            }}
                        >
                            As incerca
                        </button>
                        {menuItems[index].nextId && (
                            <button
                                className={"text-center custom-button-oulined w-72 mx-auto"}
                                onClick={() => smoothScrollToSection(menuItems[index].nextId)}
                            >
                                Hai sa mai vedem
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
