import React, {useState} from 'react';
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import {useEventContext} from "@/components/context";
import {Alert} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {gsap} from "gsap";

function Form() {
    const {setDate, setInvites} = useEventContext();

    const [invitesState, setInvitesState] = useState<string>("10"); // Default minimum is 10
    const [dateState, setDateState] = useState<string>(new Date().toISOString().split('T')[0]);

    const [editedState, setEditedState] = useState({
        touchedDate: false,
        touchedInvites: false
    })
    const [error, setError] = useState<string | null>(null);

    const currentDate = new Date().toISOString().split('T')[0];

    const handleSetDate = (date: string) => {
        setDateState(date);
        setDate(date); // Update context

        setEditedState(prevState => ({
            ...prevState,
            touchedDate: true
        }))
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
            } else if (parsedInvites <= 0) {
                setError("Trebuie să introduci un număr valid de invitați."); // Error for invalid input
                setInvitesState("");
                setInvites("");
            } else if (parsedInvites > 10000) {
                setError("Numărul maxim de invitați este 10.000."); // Error for more than 10,000
                setInvitesState("10000");
                setInvites("10000");
            } else {
                setError(null); // Clear error if valid
                setInvitesState(parsedInvites.toString());
                setInvites(parsedInvites.toString()); // Update context

                setEditedState(prevState => ({
                    ...prevState,
                    touchedInvites: true
                }))
            }
        }
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!invitesState) {
            setError("Trebuie să introduci un număr valid de invitați ca sa putem sa te ajutam cu estimarile.");
        } else if (!dateState) {
            setError("Trebuie să introduci o data a evenimentului, ca sa putem sa te ajutam cu estimarile.");
        } else {
            e.preventDefault();
            const target = "#menu";
            gsap.to(window, {duration: 1, scrollTo: target, ease: "power4.inOut"});
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
            <div className={"w-screen flex flex-col justify-center align-middle px-10"}>
                <label className={"form_label text-center text-2xl lg:text-5xl font-grotesk"} htmlFor="invites">
                    Câți invitați vor fi? ( aproximativ )
                </label>
                <input
                    className={"form_text_input bg-transparent text-2xl lg:text-5xl mt-5 focus:outline-none text-center mx-auto font-grotesk"}
                    type="text" // Restrict input to numeric values
                    id="invites"
                    name="invites"
                    required
                    min={10} // Enforce minimum at HTML level
                    max={10000} // Enforce maximum at HTML level
                    value={invitesState} // Controlled input
                    onClick={() => setInvitesState("")}
                    onFocus={() => setInvitesState("")}
                    onChange={handleSetInvites}
                />
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}


                <Alert className={"max-w-96 my-10 mx-auto"} icon={<InfoIcon fontSize="inherit"/>} severity="success">
                    Aceste informatii ne vor ajuta sa iti oferim sugestii personalizate legate de petrecerea ta.
                </Alert>
            </div>
            {/* User cannot proceed if no input was inserted */}
            {   editedState.touchedDate &&
                editedState.touchedInvites && <div className={"absolute bottom-5 right-0 left-0"}>
                    <a
                        onClick={handleScroll}
                        className={"flex justify-center text-xl text-center cursor-pointer font-mono mx-4 mb-8 z-10"}
                    >
                        <ScrollAnimation/>
                    </a>
                </div>}
        </div>
    );
}

export default Form;
