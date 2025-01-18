import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const smoothScrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    gsap.to(window, {
      scrollTo: { y: `#${id}`, autoKill: false },
      duration: 0.85,
      ease: 'power3.inOut',
    });
  }
};

export default smoothScrollToSection;