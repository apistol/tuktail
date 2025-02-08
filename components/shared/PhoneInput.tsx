import React, { useState } from "react";
import { TextField } from "@mui/material";

interface RomanianPhoneInputProps {
    sendToWapp: any
}

const RomanianPhoneInput: React.FC<RomanianPhoneInputProps> = ({ sendToWapp }) => {

    const [phone, setPhone] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);

        // Romanian phone number regex:
        // - Starts with "07" followed by 8 digits (07XXXXXXXX)
        // - OR starts with "+40" followed by a space and "7" then 8 digits (+40 7XXXXXXXX)
        const romaniaPhoneRegex = /^(07\d{8}|\+40 7\d{8})$/;

        if (!romaniaPhoneRegex.test(value)) {
            setError(true);
            setHelperText("Introduceți un număr valid (ex: 07XX XXX XXX sau +40 7XX XXX XXX)");
        } else {
            setError(false);
            setHelperText("");
            sendToWapp(value);
        }
    };

    return (
        <div className={"flex flex-col justify-center lg:justify-start"}>
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
                error={error}
                helperText={helperText}
            />
        </div>
    );
};

export default RomanianPhoneInput;
