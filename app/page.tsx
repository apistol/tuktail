'use client';

import "../App.css";
import Hero from "@/components/sections/Hero";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Presentation from "@/components/sections/Presentation";
import Form from "@/components/sections/Form";
import Advantages from "@/components/sections/advantages/Advantages";


// import Scene from "@/components/Scene";
// import {useEffect, useState} from "react";
// import Form from "@/components/sections/Form";
// import Menu from "@/components/sections/Menu";
// import Total from "@/components/sections/Total";
// import Footer from "@/components/sections/Footer";
// import Contact from "@/components/sections/Contact";
// import Presentation from "@/components/sections/Presentation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {

    useEffect(() => {

        // appereance animation
        gsap.to('.animate', {
            scrollTrigger: {
                trigger: '.animate',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            x: 100,
            opacity: 1,
            duration: 4,
        });
    }, []);

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


    return (
        <div>
            <Navigation/>
            {/*<HeroAnimated />*/}
            <Hero/>
            {/*<AdvantagesAnimated/>*/}
            <Advantages/>
            <Presentation/>
            <Form/>
        </div>
    );
}