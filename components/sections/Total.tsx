import React, { useEffect, useState } from 'react';
import { glassPrices, menuItems, presencePrices, useEventContext } from '@/components/context';
import { GlassOptions } from './total/GlassOptions';
import { PresenceOptions } from './total/PresenceOptions';
import { MenuTable } from './total/MenuTable';
import {
    getAlcoholLiters,
    getGlassesPerInviteCalcul,
    getTotalPrice,
    handleAddMenu,
    handleSubstractMenu,
    handleTrashMenu
} from '../utils';
import { TextField } from "@mui/material";
import ClientContact from "@/components/shared/ClientContact";
import axios from 'axios';

const Total = () => {
    const { menu, invites, setGlassType, glassType, presence, setPresence, setInvites, setPhone, phone, email, setEmail } =
        useEventContext();
    const [menuState, setMenuState] = useState<any>([]);
    const [userCanValidateForm, setUserCanValidateForm] = useState(false);
    const [phoneError, setPhoneError] = useState(false);


    useEffect(() => {
        setMenuState(menu);
    }, [menu]);

    useEffect(() => {
        const isValid = menuState.length > 0 && romaniaPhoneRegex.test(phone) && invites !== "";
        setUserCanValidateForm(isValid);
    }, [menuState, phone, invites]);


    const getGlassesPrice = () => {
        if (glassType && invites) {
            return <p className={"text-1xl mb-5"}>
                Costul celor <strong>{invites ? invites : 0} </strong>
                de pahare de <strong>{glassType} ({glassPrices[glassType]}RON / pahar)</strong>,
                va fi de <strong> {Number(invites ? invites : 0) * glassPrices[glassType]}</strong> RON
            </p>
        }
    }

    const getPresencePrice = () => {
        if (presence) {
            return <p className={"text-1xl mb-5"}>
                Vom sta <strong>{presence} ore</strong> iar asta va costa <strong>{presencePrices[presence]} RON</strong>,
                include pretul de inchiriere al tuk-ului.</p>
        }
    }

    const romaniaPhoneRegex = /^(07\d{8}|\+40 7\d{8})$/;

    const sendEmail = async () => {
        try {
            await axios.post("/api/contact", {
                invites,
                glassType,
                presence,
                menu: menuState,
                phone,
                email,
            });
            alert('Te vom contact curand!');
        } catch (error) {
            console.error(error);
            alert('Eroare la conexiune, incearca sa ne conectezi prin metodele de social :( .');
        }
    };

    // const sendWappMsg = async () => {
    //     return window.open(`https://wa.me/+40762552951?text=Salutare! Vreau sa organizez cea mai buna petrecere! Am ${invites} invitati, si vreau pahare de ${glassType}, tuk-ul pentru ${presence} ore, cu ${menuState.map((menuItem: any) => menuItem.name + " ")}.`, '_blank')
    // }


    return (
        <div id="total" className={"min-h-[60vh] flex flex-col justify-center align-middle mb-20"}>
            <h2 className="text-center text-5xl uppercase font-mono w-screen mb-10">Simulator petrecere</h2>

            {menuState.length < 1 && (<div className={"text-center my-8"}>
                <strong className={"text-red-900"}>Trebuie sa adaugi cel putin un produs pentru a putea genera un
                    estimat de pret</strong>
            </div>)}

            <div className="flex flex-col justify-center align-middle px-10 lg:px-20">
                <div id="edit" className="flex flex-col align-middle justify-center gap-5">
                    <div className={"flex flex-col lg:flex-row align-middle justify-center lg:justify-between gap-5"}>
                        <div>
                            <p className="mt-2 text-center lg:text-left text-2xl lg:text-2xl font-grotesk">
                                Câți invitați vor fi?
                            </p>
                            <p className="text-center lg:text-left text-lg lg:text-1xl font-grotesk">
                                (aproximativ)
                            </p>
                        </div>
                        <div className={"lg:text-right"}>
                            <TextField
                                id="invites"
                                name="invites"
                                style={{ width: "100%" }}
                                className={"text-center w-full md:w-56"}
                                type="text"
                                variant="outlined"
                                inputProps={{ min: 10, max: 10000 }} // Restricts input range
                                value={invites || ""}
                                onChange={(e) => {
                                    if (/^\d*$/.test(e.target.value)) { // Ensure only numbers are allowed
                                        setInvites(e.target.value);
                                    }
                                }}
                            />
                            {(Number(invites) < 10) && <p className="text-red-600 text-sm mt-2">Trebuie să ai minim 10 invitați</p>}
                            {(Number(invites) > 10000) && <p className="text-red-600 text-sm mt-2">Prea mulți invitați</p>}
                        </div>
                    </div>

                    <GlassOptions handleChangeGlass={setGlassType} />
                    <PresenceOptions handleSetPresence={setPresence} />
                    {(menuState.length !== 0) && <MenuTable
                        menuState={menuState}
                        menuItems={menuItems}
                        handleAddMenu={(id) => handleAddMenu(menuState, setMenuState, id)}
                        handleTrashMenu={(id) => handleTrashMenu(menuState, setMenuState, id)}
                        handleSubstractMenu={(id) => handleSubstractMenu(menuState, setMenuState, id)}
                    />}
                </div>
                <div id="summary" className="flex flex-col justify-center align-middle">
                    <h4 className="my-5 text-2xl font-mono">Sumar</h4>
                    <p>
                        Pentru cei <strong>{invites}</strong> de invitati, vei
                        avea <strong>{getAlcoholLiters(menuState)}L</strong>, insemnand{' '}
                        <strong>{getGlassesPerInviteCalcul(menuState, invites)}</strong> pahare per invitat.
                    </p>

                    {Number(getGlassesPerInviteCalcul(menuState, invites)) < 2 && (<div>
                        <br/>
                        <strong className={"text-red-900"}> Recomandam sa ai minim 2 pahare, pentru un invitat</strong>
                    </div>)}

                    <br/>
                    {getGlassesPrice()}
                    {getPresencePrice()}
                    {getTotalPrice(glassType, invites, presence, menuState, menuItems, glassPrices, presencePrices)}

                    <br/>
                    <br/>
                    <br/>

                    <ClientContact
                        phoneError={phoneError}
                        setPhoneError={setPhoneError}
                        setPhone={setPhone}
                        setEmail={setEmail}
                    />

                    <br/>
                    <br/>
                    <button
                        className={`text-center custom-button mx-auto text-sm mb-6 ${(!userCanValidateForm || phoneError ) && "custom-button-disabled"}`}
                        onClick={() => {
                            if (userCanValidateForm && !phoneError) {
                                sendEmail();
                            }
                        }}
                        disabled={(!phone || !menuState)}
                    >
                        Verifica disponibilitate
                    </button>

                    {menuState.length < 1 && (<div className={"text-center"}>
                        <strong className={"text-red-900 text-xs"}>Trebuie sa adaugi cel putin un produs pentru a
                            verifica disponibilitatea</strong>
                    </div>)}
                    {phoneError && (<div className={"text-center"}>
                        <strong className={"text-red-900 text-xs"}>Trebuie sa introduci numarul de telefon valid pentru
                            a verifica disponibilitatea</strong>
                    </div>)}
                    {invites === "" && (<div className={"text-center mb-8"}>
                        <strong className={"text-red-900 text-xs"}>Trebuie sa introduci un numar estimativ de invitati
                            pentru a verifica disponibilitatea</strong>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Total;