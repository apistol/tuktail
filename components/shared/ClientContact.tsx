import React, { useState } from "react";
import { TextField } from "@mui/material";
import { isMobile } from 'react-device-detect';

interface ClientContactProps {
    setPhone: any;
    setEmail: any;
}

const ClientContact: React.FC<ClientContactProps> = ({ setPhone, setEmail }) => {

    const [phone, setPhoneS] = useState("");
    const [email, setEmailS] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHelperText, setPhoneHelperText] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneS(value);

        const romaniaPhoneRegex = /^(07\d{8}|\+40 7\d{8})$/;

        if (!romaniaPhoneRegex.test(value)) {
            setPhoneError(true);
            setPhoneHelperText("Introduceți un număr valid (ex: 07XX XXX XXX sau +40 7XX XXX XXX)");
        } else {
            setPhoneError(false);
            setPhoneHelperText("");
            setPhone(value);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmailS(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            setEmailError(true);
            setEmailHelperText("Introduceți o adresă de email validă");
        } else {
            setEmailError(false);
            setEmailHelperText("");
            setEmail(value);
        }
    };

    return (
        <div className={"flex flex-col justify-center lg:justify-start"}>
            {isMobile ? (
                <>
                    <p className="mt-2 text-center lg:text-left text-lg lg:text-1xl font-mono mb-6">
                        Numarul tau de telefon:
                    </p>
                    <TextField
                        id="romanian-phone"
                        name="romanian-phone"
                        type="tel"
                        variant="outlined"
                        className={"w-72"}
                        placeholder="e.g. 07XX XXX XXX"
                        value={phone}
                        onChange={handlePhoneChange}
                        error={phoneError}
                        helperText={phoneHelperText}
                    />
                </>
            ) : (
                <>
                    <p className="mt-2 text-left text-lg lg:text-1xl font-mono mb-6">
                        Adresa ta de email:
                    </p>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        variant="outlined"
                        className={"w-72"}
                        placeholder="e.g. exemplu@domeniu.com"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                        helperText={emailHelperText}
                    />
                </>
            )}
        </div>
    );
};

export default ClientContact;