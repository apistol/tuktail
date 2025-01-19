import React from 'react';
import Image from "next/image";

const Navigation = () => {

    const handleFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=61571911179673', '_blank');
    }
    const handleInstagram = () => {
        window.open('https://www.instagram.com/tukteilromania/', '_blank');
    }
    const handleEmail = () => {
        window.open('mailto:tukteiloffice@gmail.com', '_blank');
    }
    const handleWhatsApp = () => {
        window.open('https://wa.me/+40762552951?text=Salutare! Vreau sa organizez cea mai buna petrecere!', '_blank');
    }

    return (
        <div className="nav flex justify-between align-middle lg:py-4 lg:px-12">
            <div className="hidden lg:block col-span-1 flex-1 ">
            </div>
            <div className="col-span-1 flex-1">
                <div className={"flex h-full justify-start align-middle"}>
                    <Image width={153}  height={49} src={"./logo-dark.svg"} alt={"placeholder"} className={"ml-10" +
                        " lg:m-auto"}/>
                </div>
            </div>
            <div className="col-span-1 h-full flex-1 flex justify-end align-middle pr-10">
                <div className="flex flex-row gap-1">
                    <a
                        onClick={() => handleFacebook()}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-facebook.svg"} alt={"Facebook"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => handleInstagram()}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-instagram.svg"} alt={"Instagram"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => handleEmail()}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-email.svg"} alt={"Email"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => handleWhatsApp()}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-whatsapp.svg"} alt={"Whatsapp"} className={"w-8"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;