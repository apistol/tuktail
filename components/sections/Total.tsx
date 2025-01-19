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
            <div className="flex flex-col lg:flex-row justify-center align-middle">
                <div id="edit" className="lg:w-1/2 flex flex-col align-middle justify-center gap-5">
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
                <div id="summary" className="lg:w-1/2 flex flex-col justify-center align-middle p-10 lg:p-0">
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
                    />
                </div>
            </div>
        </div>
    );
};

export default Total;
