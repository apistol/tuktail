import React from 'react';
import Image from "next/image";

const Navigation = () => {
    return (
        <div className="nav flex justify-between align-middle lg:py-4 lg:px-12">
            <div className="hidden lg:block col-span-1 flex-1 ">
            </div>
            <div className="col-span-1 flex-1">
                <div className={"flex h-full justify-start align-middle"}>
                    <Image width={153}  height={49} src={"./mini-logo.svg"} alt={"placeholder"} className={"ml-10" +
                        " lg:m-auto"}/>
                </div>
            </div>
            <div className="col-span-1 h-full flex-1 flex justify-end align-middle pr-10">
                <div className="flex flex-row gap-1">
                    <a
                        onClick={() => alert("Facebook")}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-facebook.svg"} alt={"placeholder"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => alert("Instagram")}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-instagram.svg"} alt={"placeholder"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => alert("Mail")}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-email.svg"} alt={"placeholder"} className={"w-8"}/>
                    </a>
                    <a
                        onClick={() => alert("Wapp")}
                        className={"flex align-middle lg:align-top"}
                    >
                        <Image width={49} height={49} src={"./icon-whatsapp.svg"} alt={"placeholder"} className={"w-8"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;