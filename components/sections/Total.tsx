import React, {useEffect, useState} from 'react';


import {glassPrices, menuItems, presencePrices, useEventContext} from '@/components/context';
import {GlassOptions} from './total/GlassOptions';
import {PresenceOptions} from './total/PresenceOptions';
import {MenuTable} from './total/MenuTable';
import {
    getAlcoholLiters,
    getGlassesPerInviteCalcul,
    getTotalPrice,
    handleAddMenu,
    handleSubstractMenu,
    handleTrashMenu
} from '../utils';
import ContactModal from "@/components/shared/ContactModal";
import {TextField, Typography} from "@mui/material";

const Total = () => {
    const {menu, invites, setGlassType, glassType, presence, setPresence, setInvites} =
        useEventContext();
    const [menuState, setMenuState] = useState<any>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const payloadModal = {
        menu,
        invites,
        glassType,
        presence
    };


    useEffect(() => {
        setMenuState(menu);
    }, [menu]);


    const getGlassesPrice = () => {
        if (glassType && invites) {
            return <p className={"text-1xl mb-5"}>
                Costul celor <strong>{invites}</strong> de pahare de <strong>{glassType} ( {glassPrices[glassType]}RON /
                pahar )</strong>, va fi de
                <strong> {Number(invites) * glassPrices[glassType]}</strong> RON</p>
        }
    }

    const getPresencePrice = () => {
        if (presence) {
            return <p className={"text-1xl mb-5"}>
                Vom sta <strong>{presence} ore</strong> iar asta va costa <strong>{presencePrices[presence]}RON</strong>,
                include pretul de inchiriere al tuk-ului.</p>
        }
    }

    return (
        <div id="total" className={"min-h-[60vh] flex flex-col justify-center align-middle mb-20"}>
            <h2 className="text-center text-5xl uppercase font-mono w-screen mb-10">Simulator petrecere</h2>
            <div className="flex flex-col justify-center align-middle px-10 lg:px-20">
                <div id="edit" className="flex flex-col align-middle justify-center gap-5">
                    <div className={"flex flex-col lg:flex-row align-middle justify-center lg:justify-between gap-5"}>
                        <div>
                            <p className="mt-2 text-center lg:text-left text-2xl lg:text-2xl font-grotesk">
                                Câți invitați vor fi?
                            </p>
                            <p className="text-center lg:text-left text-lg lg:text-1xl font-grotesk">
                                ( aproximativ )
                            </p>
                        </div>
                        <TextField
                            id="invites"
                            name="invites"
                            className={"text-center"}
                            type="text"
                            variant="outlined"
                            inputProps={{min: 10, max: 10000}} // Restricts input range
                            value={invites || ""}
                            onChange={(e) => {
                                if (/^\d*$/.test(e.target.value)) { // Ensure only numbers are allowed
                                    setInvites(e.target.value);
                                }
                            }}
                            error={presence !== "" && (Number(invites) < 10 || Number(invites) > 10000)} // Corrected error condition
                            helperText={
                                invites !== "" && (Number(invites) < 10)
                                    ? "Trebuie să ai minim 10 invitați"
                                    : Number(invites) > 10000
                                        ? "Hai să nu exagerăm"
                                        : ""
                            }
                        />
                    </div>


                    <GlassOptions handleChangeGlass={setGlassType}/>
                    <PresenceOptions handleSetPresence={setPresence}/>
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

                    {Number(getGlassesPerInviteCalcul(menuState, invites)) < 1 && (<div>
                        <br/>
                        <strong className={"text-red-900"}> Recomandam sa ai minim 1 pahar, pentru un invitat</strong>
                    </div>)}

                    <br/>
                    {getGlassesPrice()}
                    {getPresencePrice()}
                    {getTotalPrice(glassType, invites, presence, menuState, menuItems, glassPrices, presencePrices)}

                    <br/>
                    <br/>
                    <br/>

                    <button
                        className={"text-center custom-button mx-auto text-sm"}
                        onClick={() => setModalOpen(true)}
                        // disabled={!glassType || !invites || !presence || !menuState}
                    >
                        Verifica disponibilitate
                    </button>


                </div>
            </div>

        </div>
    );
};

export default Total;
