'use client';

import "../App.css";
import Hero from "@/components/sections/Hero";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {useEffect} from 'react';
import Navigation from "@/components/Navigation";
import Presentation from "@/components/sections/Presentation";
import Form from "@/components/sections/Form";
import Advantages from "@/components/sections/advantages/Advantages";
import Menu from "@/components/sections/Menu";
import Total from "@/components/sections/Total";
// import type { Metadata } from "next";
import {AppProvider} from "@/lib/context";
import Footer from "@/components/sections/Footer";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// const metadata: Metadata = {
//     title: "Redux Toolkit",
// };

export default function Home() {

     useEffect(() => {
        // ScrollTrigger.create({
        //     trigger: ".section", // Wrapper containing all folds
        //     start: "top top",
        //     end: "bottom bottom",
        //     snap: {
        //         snapTo: ["#fold1", "#fold2", "#fold3"], // Snap to these elements by ID
        //         duration: 0.5, // Duration for the snapping animation
        //         ease: "power1.inOut", // Easing for smooth snap
        //     },
        // });
    }, []);

    // useEffect(() => {
    //     // Example usage of dispatch
    //     dispatch(increment());
    // }, [dispatch]);

    return (
            <AppProvider>
                <Navigation/>
                {/*<HeroAnimated />*/}
                <Hero/>
                {/*<AdvantagesAnimated/>*/}
                <Advantages/>
                <Presentation/>
                <Form/>
                <Menu/>
                <Total/>
                <Footer />
            </AppProvider>
    );
}