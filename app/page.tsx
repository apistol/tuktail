'use client';

import "../App.css";
import Hero from "@/components/sections/Hero";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Navigation from "@/components/Navigation";
import Presentation from "@/components/sections/Presentation";
import Form from "@/components/sections/Form";
import Menu from "@/components/sections/Menu";
import Total from "@/components/sections/Total";
import Footer from "@/components/sections/Footer";
import Advantages from "@/components/sections/Advantages";
import FloatingContactBubble from "@/components/shared/WhatsAppChatBubble";
import {useEventContext} from "@/components/context";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



export default function Home() {

    const {invites, date} = useEventContext()


    return (
        <>
                <Navigation/>
                <Hero/>
                <Advantages/>
                <Presentation/>
                <Form/>
                { invites && date && <Menu/>}
                { invites && date && <Total/>}
                { invites && date && <Footer/>}

                <FloatingContactBubble templateMsg={""}/>
        </>
    );
}