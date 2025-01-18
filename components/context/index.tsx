"use client";

import React, {createContext, useContext, useState, ReactNode} from 'react';
import {OrderItem} from "@/components/types/Order";


export enum MenuNames {
    Mimosa = 'Mimosa',
    AperolSpritz = 'Aperol Spritz',
    Prosecco = 'Prosecco',
    Hugo = 'Hugo'
}

export const menuItems = [
    {
        id: 1,
        title: "Aperol Spritz",
        description: "Adauga o nota de stil italian petrecerii tale cu Aperol Spritz, cocktailul vibrant din Veneto! Cu origini in anii 1950 si o istorie legata de cultura „aperitivo”, aceasta bautura racoritoare combina perfect vinul spumant, Aperolul si apa minerala. Gustul sau echilibrat, intre amar si dulce, dar si culoarea atragatoare il fac unul dintre cele mai iubite cocktailuri. Alege Aperol Spritz pentru a aduce farmecul Italiei direct la petrecerea ta!",
        imageSrc: "/aperol-spritz.png",
        nextId: "mimosa",
        menuName: MenuNames.AperolSpritz,
    },
    {
        id: 2,
        title: "Mimosa",
        description: "Transforma orice petrecere intr-un brunch de lux cu Mimosa, bautura eleganta inventata in 1925 la Paris! Perfecta pentru toasturi si celebrari, combinatia de sampanie si suc proaspat de portocale ofera un echilibru ideal intre rafinament si prospetime. Simplu, dar sofisticat, Mimosa este alegerea perfecta pentru momentele speciale alaturi de prieteni. Alege sa ridici nivelul petrecerii tale cu acest clasic atemporal!",
        imageSrc: "/mimosa.png",
        nextId: "hugo",
        menuName: MenuNames.Mimosa,
    },
    {
        id: 3,
        title: "Hugo",
        description: "Surprinde-ti invitatii cu un cocktail sofisticat si revigorant – Hugo! Creat in 2005 in Tirolul de Sud, acest mix delicios de prosecco, sirop de soc, apa minerala si menta proaspata este perfect pentru serile calduroase si nu numai. Cu aroma sa florala si prospetimea inconfundabila, Hugo este bautura care transforma orice petrecere intr-un moment memorabil. Alege Hugo pentru a aduce o briza de prospetime la evenimentul tau!",
        imageSrc: "/hugo.png",
        nextId: "prosecco",
        menuName: MenuNames.Hugo,
    },
    {
        id: 4,
        title: "Prosecco",
        description: "Fa din petrecerea ta o adevarata sarbatoare cu Prosecco, vinul spumant italian renumit pentru aroma sa fructata si florala! Originar din Veneto, Prosecco aduce o nota festiva si un gust racoritor care se potriveste perfect oricarei ocazii. Fie ca il savurezi simplu sau in cocktailuri precum Aperol Spritz sau Hugo, Prosecco este esenta rafinamentului italian. Alege-l pentru un toast memorabil si o atmosfera de neuitat!",
        imageSrc: "/prosseco.png",
        nextId: "",
        menuName: MenuNames.Prosecco,
    },
];



interface EventContextType {
    date: string;
    invites: string;
    menu: OrderItem[];
    glassType: string;
    presence: string;
    setDate: (date: string) => void;
    setInvites: (invites: string) => void;
    setMenu: (item: OrderItem[]) => void;
    setGlassType: (glassType: string) => void;
    setPresence: (presence: string) => void;
    addOne: (item: OrderItem) => void;
    removeOne: (item: OrderItem) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({children}: { children: ReactNode }) => {
    const [date, setDate] = useState<string>('');
    const [invites, setInvites] = useState<string>('');
    const [menu, setMenu] = useState<OrderItem[]>([]);
    const [glassType, setGlassType] = useState<string>('');
    const [presence, setPresence] = useState<string>('');

    const addOne = (item: OrderItem) => {
        setMenu((prevMenu) => {
            const existingItemIndex = prevMenu.findIndex((menuItem) => menuItem.id === item.id);

            if (existingItemIndex !== -1) {
                // Update qty if item exists
                const updatedMenu = [...prevMenu];
                updatedMenu[existingItemIndex] = {
                    ...updatedMenu[existingItemIndex],
                    qty: updatedMenu[existingItemIndex].qty + 1, // Increment the qty
                };
                return updatedMenu;
            }

            // Add new item with proper structure if not found
            return [...prevMenu, { ...item, qty: 1 }];
        });
    };

    const removeOne = (item: OrderItem) => {
        setMenu((prevMenu) => {
            const existingItemIndex = prevMenu.findIndex((menuItem) => menuItem.id === item.id);
            if (existingItemIndex !== -1) {
                const updatedMenu = [...prevMenu];
                if (updatedMenu[existingItemIndex].qty > 1) {
                    updatedMenu[existingItemIndex] = {
                        ...updatedMenu[existingItemIndex],
                        qty: updatedMenu[existingItemIndex].qty - 1,
                    };
                } else {
                    updatedMenu.splice(existingItemIndex, 1);
                }
                return updatedMenu;
            }
            return prevMenu;
        });
    };

    return (
        <EventContext.Provider
            value={{date, invites, menu, glassType, presence, setDate, setInvites, setMenu, setGlassType, setPresence, addOne, removeOne}}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = (): EventContextType => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};