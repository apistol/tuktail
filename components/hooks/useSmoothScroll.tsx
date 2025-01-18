'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// TODO maybe use contrlled scroll
export const useSmoothScroll = (upId:string, downId:string) => {
  const containerRef = useRef(null);

  // 17:21  Warning: Assignments to the 'isScrolling' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.  r
  let isScrolling = false;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    function goToSection(targetId:string) {
      isScrolling = true;
      const target = document.getElementById(targetId);
      if (target) {
        gsap.to(window, {
          scrollTo: { y: target.offsetTop, autoKill: false },
          duration: 0.85,
          ease: "power3.inOut",
          onComplete: () => {
            setTimeout(() => {
              isScrolling = false;
            }, 400);
          },
        });
      }
    }

    if (downId) {
      ScrollTrigger.create({
        trigger: `#${downId}`,
        start: "top top",
        onEnter: () => {
          if (!isScrolling) goToSection(downId);
        },
      });
    }

    if (upId) {
      ScrollTrigger.create({
        trigger: `#${upId}`,
        start: "top top",
        onEnterBack: () => {
          if (!isScrolling) goToSection(upId);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [upId, downId]);

  return containerRef;
};
