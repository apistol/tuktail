'use client';

import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import Image from "next/image";

const AgeVerificationModal = ({ onAgree, onDisagree }:any) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("ageVerified") === "true") {
            setIsOpen(false);
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem("ageVerified", "true");
        setIsOpen(false);
        if (onAgree) onAgree();
    };

    const handleDisagree = () => {
        if (onDisagree) {
            onDisagree();
        } else {
            window.location.href = "https://www.google.com"; // Redirect to another page
        }
    };

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} fullWidth maxWidth="sm">
            <div className="bg-white text-white p-6 ">
                <DialogTitle className="text-center text-2xl font-semibold text-white">
                    <div className="flex justify-center mb-3">
                        <Image src="/logo-dark.svg" alt="SPUMANTERIA" className="h-32" width={128} height={128} />                    </div>
                    LASĂ-MĂ SĂ INTRU
                </DialogTitle>
                <DialogContent className="text-center">
                    <p className="text-lg text-gray-900 mb-6">
                        Am peste <span className="font-bold">18</span> ani.
                    </p>
                    <div className="flex justify-between space-x-4">
                        <Button
                            variant="outlined"
                            className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                            onClick={handleAgree}
                        >
                            DA
                        </Button>
                        <Button
                            variant="outlined"
                            className="w-full border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
                            onClick={handleDisagree}
                        >
                            NU
                        </Button>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default AgeVerificationModal;
