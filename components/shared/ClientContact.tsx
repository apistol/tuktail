import React, { useState } from "react";
import { TextField } from "@mui/material";

interface ClientContactProps {
    setPhone: any;
    setEmail: any;
    phoneError: any;
    setPhoneError: any;
}

const ClientContact: React.FC<ClientContactProps> = ({ setPhone, phoneError, setPhoneError }) => {

    const [phone, setPhoneS] = useState("");
    const [phoneHelperText, setPhoneHelperText] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
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


    return (
        <div className={"flex flex-col justify-center lg:justify-start"}>
                <>
                    <p className="mt-2 text-center lg:text-left text-lg lg:text-1xl font-mono mb-6">
                        Lasa-ne numarul de telefon pentru a te contacta:
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

        </div>
    );
};

export default ClientContact;