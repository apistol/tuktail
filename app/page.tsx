'use client';

import "../App.css";
import Hero from "@/components/sections/Hero";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Navigation from "@/components/Navigation";
import Presentation from "@/components/sections/Presentation";
import Menu from "@/components/sections/Menu";
import Total from "@/components/sections/Total";
import Footer from "@/components/sections/Footer";
import Advantages from "@/components/sections/Advantages";
import FloatingContactBubble from "@/components/shared/WhatsAppChatBubble";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



export default function Home() {



    return (
        <>
                <Navigation/>
                <Hero/>
                <Advantages/>
                <Presentation/>
                <Menu/>
                <Total/>
                <Footer/>
                <FloatingContactBubble />
        </>
    );
}