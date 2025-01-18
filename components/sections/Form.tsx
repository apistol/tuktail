import React, { useState } from 'react';
import { Link as ScrollableLink } from "react-scroll";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { useEventContext } from "@/components/context";

function Form() {
    const { setDate, setInvites } = useEventContext();

    const [invitesState, setInvitesState] = useState<string>("10"); // Default minimum is 10
    const [dateState, setDateState] = useState<string>(new Date().toISOString().split('T')[0]);
    const [error, setError] = useState<string | null>(null);

    const currentDate = new Date().toISOString().split('T')[0];

    const handleSetDate = (date: string) => {
        setDateState(date);
        setDate(date); // Update context
    };

    const handleSetInvites = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (inputValue === "") {
            setInvitesState(""); // Reset to minimum 10
            setInvites("");
        } else {
            const parsedInvites = parseInt(inputValue, 10);

            if (isNaN(parsedInvites)) {
                setError("Trebuie să introduci un număr valid de invitați."); // Error for invalid input
                setInvitesState("0");
                setInvites("0");
            } else if (parsedInvites < 0) {
                setError("Trebuie să introduci un număr valid de invitați."); // Error for invalid input
                setInvitesState("10");
                setInvites("10");
            } else if (parsedInvites > 10000) {
                setError("Numărul maxim de invitați este 10.000."); // Error for more than 10,000
                setInvitesState("10000");
                setInvites("10000");
            } else {
                setError(null); // Clear error if valid
                setInvitesState(parsedInvites.toString());
                setInvites(parsedInvites.toString()); // Update context
            }
        }
    };

    return (
        <div id={"form"} className={"relative h-screen w-screen overflow-hidden flex flex-col justify-center gap-20"}>
            <div className={"w-screen flex flex-col justify-center align-middle text-center mx-auto"}>
                <label className={"form_label text-center text-2xl lg:text-5xl font-grotesk"} htmlFor="date">
                    În ce data va fi evenimentul?
                </label>
                <input
                    className={"form_text_input bg-transparent text-2xl lg:text-5xl mt-5 focus:outline-none font-grotesk form_text_input_date mx-auto"}
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={currentDate}
                    value={dateState} // Controlled input
                    onChange={(e) => handleSetDate(e.target.value)}
                />
            </div>
            <div className={"w-screen flex flex-col justify-center align-middle"}>
                <label className={"form_label text-center text-2xl lg:text-5xl font-grotesk"} htmlFor="invites">
                    Câți invitați vor fi? (Minim 10, Maxim 10.000)
                </label>
                <input
                    className={"form_text_input bg-transparent text-2xl lg:text-5xl mt-5 focus:outline-none text-center mx-auto font-grotesk"}
                    type="number" // Restrict input to numeric values
                    id="invites"
                    name="invites"
                    required
                    min={0} // Enforce minimum at HTML level
                    max={10000} // Enforce maximum at HTML level
                    value={invitesState} // Controlled input
                    onClick={() => setInvitesState("")}
                    onFocus={() => setInvitesState("")}
                    onChange={handleSetInvites}
                />
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            </div>
            <div className={"absolute bottom-5 right-0 left-0"}>
                <ScrollableLink
                    to="menu"
                    smooth={true}
                    duration={500}
                    className={"flex justify-center text-xl text-center cursor-pointer font-mono mx-4 mb-8 font-mono"}
                >
                    <ScrollAnimation />
                </ScrollableLink>
            </div>
        </div>
    );
}

export default Form;
