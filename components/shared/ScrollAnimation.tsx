import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieCursor = () => {
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'scroll-animation.json',
    });

    const handleMouseMove = (event: MouseEvent) => {
      if (lottieRef.current) {
        lottieRef.current.style.left = `${event.clientX}px`;
        lottieRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      animation.destroy();
    };
  }, []);

  return (
    <div
      ref={lottieRef}
      style={{
        pointerEvents: 'none',
        width: '100px', // Adjust the size as needed
        height: '100px', // Adjust the size as needed
      }}
    />
  );
};

export default LottieCursor;