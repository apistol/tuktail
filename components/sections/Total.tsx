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

const Total = () => {
    const {menu, invites, setGlassType, glassType, presence, setPresence} =
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
            <h2 className="text-center text-5xl font-grotesk w-screen mb-10">Simulator petrecere</h2>
            <div className="flex flex-col justify-center align-middle px-10 lg:px-20">
                <div id="edit" className="flex flex-col align-middle justify-center gap-5">

                    <label className={"form_label text-center text-1xl lg:text-2xl font-grotesk"} htmlFor="invites">
                        <p>Câți invitați vor fi? </p>
                        <p> ( aproximativ )</p>
                    </label>
                    <input
                        className={"form_text_input bg-transparent text-1xl lg:text-2xl mt-5 focus:outline-none" +
                            " text-center mx-auto font-grotesk"}
                        type="text" // Restrict input to numeric values
                        id="invites"
                        name="invites"
                        required
                        min={10} // Enforce minimum at HTML level
                        max={10000} // Enforce maximum at HTML level
                        value={presence} // Controlled input
                        onClick={() => setPresence("")}
                        onFocus={() => setPresence("")}
                        onChange={(data) =>setPresence(String(data))}
                    />

                    <GlassOptions handleChangeGlass={setGlassType}/>
                    <PresenceOptions handleSetPresence={setPresence}/>
                    <MenuTable
                        menuState={menuState}
                        menuItems={menuItems}
                        handleAddMenu={(id) => handleAddMenu(menuState, setMenuState, id)}
                        handleTrashMenu={(id) => handleTrashMenu(menuState, setMenuState, id)}
                        handleSubstractMenu={(id) => handleSubstractMenu(menuState, setMenuState, id)}
                    />
                </div>
                <div id="summary" className="flex flex-col justify-center align-middle">
                    <h4 className="my-5 text-2xl">Sumar</h4>
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

                    <button
                        className={"text-center custom-button mx-auto text-sm"}
                        onClick={() => setModalOpen(true)}
                        // disabled={!glassType || !invites || !presence || !menuState}
                    >
                        Verifica disponibilitate
                    </button>


                    <ContactModal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        payloadModal={payloadModal}
                    />
                </div>
            </div>

        </div>
    );
};

export default Total;
