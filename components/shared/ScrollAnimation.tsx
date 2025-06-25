import React, { useEffect, useRef, useState } from 'react';

const LottieCursor = () => {
  const lottieRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !lottieRef.current) return;

    // Dynamic import to avoid SSR issues
    import('lottie-web').then((lottie) => {
      const animation = lottie.default.loadAnimation({
        container: lottieRef.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animation-scroll.json',
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
    });
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={lottieRef}
      style={{
        pointerEvents: 'none',
        width: 'auto', // Adjust the size as needed
        height: '250px', // Adjust the size as needed
      }}
    />
  );
};

export default LottieCursor;