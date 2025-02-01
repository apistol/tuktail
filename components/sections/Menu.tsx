import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useEventContext, menuItems } from "@/components/context";
import { IconButton, CircularProgress } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function Menu() {
    const { addOne } = useEventContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false); // Stop loader when item changes
    }, [currentIndex]);

    const handleNext = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % menuItems.length);
        }, 500); // Simulate loading time
    };

    const handlePrev = () => {
        setLoading(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center relative w-full h-screen">
            <h2 id="menu" className="text-center text-2xl lg:text-5xl font-grotesk uppercase">
                Cu ce ti-ai rasfata invitatii?
            </h2>

            <div className="relative flex flex-col items-center justify-center w-full h-full">
                {/* Loader */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                        <CircularProgress color="inherit" />
                    </div>
                )}

                {/* Navigation Arrows */}
                <IconButton
                    onClick={handlePrev}
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20"
                >
                    <ArrowBackIos fontSize="large" />
                </IconButton>

                <IconButton
                    onClick={handleNext}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20"
                >
                    <ArrowForwardIos fontSize="large" />
                </IconButton>

                {/* Drink Item */}
                <div className="relative w-full flex items-center justify-center">
                    <div
                        key={menuItems[currentIndex].id}
                        className={`flex flex-col lg:flex-row justify-center items-center w-full transition-opacity duration-500 ${
                            loading ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        {/* Drink Description */}
                        <div className="lg:w-1/3 flex flex-col justify-center lg:mb-0 text-center">
                            <h3 className="text-4xl font-grotesk font-bold">
                                {menuItems[currentIndex].title}
                            </h3>
                            <p className="font-grotesk m-10">{menuItems[currentIndex].description}</p>
                        </div>

                        {/* Drink Image */}
                        <Image
                            src={menuItems[currentIndex].imageSrc}
                            alt={menuItems[currentIndex].title}
                            className="w-2/5 lg:w-1/3 lg:p-20 mx-auto mb-10 lg:mb-0 transition-opacity duration-500"
                            width={364}
                            height={577}
                            style={{ objectFit: "contain" }}
                        />

                        {/* Buttons */}
                        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
                            <button
                                className="text-center custom-button w-72 mx-auto"
                                onClick={() => {
                                    addOne({
                                        id: menuItems[currentIndex].id,
                                        name: menuItems[currentIndex].title,
                                        qty: 1,
                                    });
                                    handleNext();
                                }}
                            >
                                ADAUGA SI CONTINUA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
