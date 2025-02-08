import { useState, useEffect } from 'react';

const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/android/i.test(userAgent)) {
            setIsMobile(true);
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return isMobile;
};

export default useDevice;