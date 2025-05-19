'use client';

import "../App.css";
import Hero from "@/components/sections/Hero";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Navigation from "@/components/Navigation";
import Presentation from "@/components/sections/Presentation";
import Menu from "@/components/sections/Menu";
import Footer from "@/components/sections/Footer";
import Advantages from "@/components/sections/Advantages";
import FloatingContactBubble from "@/components/shared/WhatsAppChatBubble";
import AgeVerificationModal from "@/components/shared/AgeVerificationModal";
import React from "react";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


export default function Home() {

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+40762552951?text=Salutare! Vreau sa organizez cea mai buna petrecere!', '_blank');
    };

    return (
        <>
            <Navigation/>
            <Hero/>
            <Advantages/>
            <Presentation/>
            <Menu/>

            <div className={"flex flex-col items-center justify-center mt-10 mb-10"}>
                <button
                    className={"text-center custom-button w-72 mx-auto"}
                    onClick={() => handleWhatsAppClick()}
                >
                    CONTACTEAZA-NE
                </button>
            </div>

            <Footer/>


            <FloatingContactBubble/>
            <AgeVerificationModal/>
        </>
    );
}