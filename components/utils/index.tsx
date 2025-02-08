export const handleAddMenu = (menuState: any, setMenuState: any, id: any) => {
    setMenuState((prevState: any) =>
        prevState.map((item: any) => item.id === Number(id) ? {...item, qty: item.qty + 1} : item)
    );
};

export const handleTrashMenu = (menuState: any, setMenuState: any, id: any) => {
    setMenuState(menuState.filter((item: any) => item.id !== id));
};

export const handleSubstractMenu = (menuState: any, setMenuState: any, id: any) => {
    setMenuState(menuState.map((item: any) => item.id === id && item.qty > 1 ? {...item, qty: item.qty - 1} : item));
};

export const getGlassesPerInviteCalcul = (menuState: any, invites: any) => {
    const oneKegInGlasses = 200;
    const totalKegs = menuState.reduce((acc: any, item: any) => acc + item.qty, 0);
    return Math.round(totalKegs * oneKegInGlasses / (invites ? invites : 1));
};

export const getAlcoholLiters = (menuState: any) => {
    const totalKegs = menuState.reduce((acc: any, item: any) => acc + item.qty, 0);
    return totalKegs * 20;
};

export const getTotalMenuPrice = (menuState: any, menuItems: any) => {
    return menuState.reduce((total: any, item: any) => total + item.qty * menuItems[item.id - 1].price, 0);
};

export const getTotalPrice = (glassType: any, invites: any, presence: any, menuState: any, menuItems: any, glassPrices: any, presencePrices: any) => {
    if (!glassType) {
        return "Te rugam alege tipul de pahar pentru a vedea o estimare a totalului.";
    } else if (!presence) {
        return "Te rugam alege cat timp ai vrea sa fim prezenti pentru a vedea o estimare a totalului.";
    }

    const glassCost = Number(glassPrices[glassType]) * Number(invites);
    const menuCost = getTotalMenuPrice(menuState, menuItems);
    const presenceCost = Number(presencePrices[presence]);
    return (
        <p>
            Cost total : <strong>{glassCost + menuCost + presenceCost} RON</strong>
        </p>
    );
}