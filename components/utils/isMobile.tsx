import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 1024);
            window.addEventListener("resize", handleResize);
        }

        // Cleanup event listener on unmount
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    return isMobile;
};

export default useIsMobile;