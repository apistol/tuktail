import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from "next/image";
import {glassPrices, menuItems, presencePrices, useEventContext} from "@/components/context";
import {useEffect, useState} from "react";
import {OrderItem} from "@/components/types/Order";
import {IconButton, Tooltip} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";


function Total() {

    const {menu, invites, setGlassType, glassType, presence, setPresence} = useEventContext()

    const [menuState, setMenuState] = useState<OrderItem[]>([]);

    useEffect(() => {
        setMenuState(menu);
    }, [menu]);


    const handleAddMenu = (id: number | string) => {
        setMenuState(prevState =>
            prevState.map(item => item.id === Number(id) ? {...item, qty: item.qty + 1} : item)
        );
    }

    const handleTrashMenu = (id: number) => {
        setMenuState(menuState.filter(item => item.id !== id));
    }

    const handleSubstractMenu = (id: number) => {
        setMenuState(menuState.map(item => item.id === id && item.qty > 1 ? {...item, qty: item.qty - 1} : item));
    }

    const handleChangeGlass = (name: string) => {
        setGlassType(name);
    };

    const handleSetPresence = (time: string) => {
        setPresence(time);
    };

    const getGlassesPerInviteCalcul = () => {
        let kegsQry = 0;
        const oneKegInGlasses = 200;

        menuState.forEach((item) => {
            kegsQry += item.qty;
        });

        return  Number(Number(kegsQry * oneKegInGlasses) / Number(invites)).toFixed(1);
    }

    const getAlcoholLiters = () => {
        let kegsQry = 0;

        menuState.forEach((item) => {
            kegsQry += item.qty;
        });

        return <strong> ( {kegsQry * 20}L )</strong>
    }

    const getGlassesPerInvite = () => {

        if (invites && menuState) {
            return <div>
                <p className={"text-1xl mb-5"}>Pentru cei <strong>{invites}</strong> de invitati ai tai, vei avea
                    <strong>{ getAlcoholLiters()}</strong> insemnand <strong>{getGlassesPerInviteCalcul()}</strong> pahare de bautura per invitat
                </p>
                {(Number(getGlassesPerInviteCalcul()) < 2) && <p className={"text-1xl mb-5"}><strong>Iti reomandam sa ai cel putin 2 pahare per invitat.</strong></p>}
            </div>
        } else if (!menuState) {
            return <p className={"text-1xl mb-5"}>
                Adauga cel putin o bautura pentru a vedea o estimare.</p>
        } else if (!invites) {
            return <p className={"text-1xl mb-5"}>
                Seteaza un numar aproximativ de invitati pentru a vedea o estimare.</p>
        }

    }

    const getGlassesPrice = () => {
        if (glassType && invites) {
            return <p className={"text-1xl mb-5"}>
                Costul celor <strong>{invites}</strong> de pahare de <strong>{glassType} ( {glassPrices[glassType]}RON /
                pahar )</strong>, va fi de
                <strong> {Number(invites) * glassPrices[glassType]}</strong> RON</p>
        } else if (!glassType) {
            return <p className={"text-1xl mb-5"}>
                Seteaza un tip de pahar pentru a vedea o estimare.</p>
        } else if (!invites) {
            return <p className={"text-1xl mb-5"}>
                Seteaza un numar aproximativ de invitati pentru a vedea o estimare.</p>
        }
    }

    const getPresencePrice = () => {
        if (presence) {
            return <p className={"text-1xl mb-5"}>
                Vom sta <strong>{presence} ore</strong> iar asta va costa <strong>{presencePrices[presence]}RON</strong>,
                include pretul de inchiriere al tuk-ului.</p>
        } else if (!presence) {
            return <p className={"text-1xl mb-5"}>
                Alege mai intai cat timp vrei sa fim prezenti la eveniment.</p>
        }
    }

    const getTotalMenuPrice = () => {
        let total = 0;
        menuState.forEach((item) => {
            total += item.qty * menuItems[item.id - 1].price;
        });
        return total;

    }
    const getTotalPrice = () => {
        if (glassType && invites && presence && menuState) {
            return <p className={"text-1xl mb-5"}>Costul total al bauturilor este de <strong>{
                (Number(glassPrices[glassType]) * Number(invites)) +
                getTotalMenuPrice() +
                Number(presencePrices[presence])
            }</strong> lei</p>
        } else if (!glassType) {
            return <p className={"text-1xl mb-5"}>
                Seteaza un tip de pahar pentru a vedea o estimare.</p>
        } else if (!invites) {
            return <p className={"text-1xl mb-5"}>
                Seteaza un numar aproximativ de invitati pentru a vedea o estimare.</p>
        } else if (!presence) {
            return <p className={"text-1xl mb-5"}>
                Seteaza cat timp vrei sa petrecem cu tine pentru a vedea o estimare.</p>
        } else if (!menuState) {
            return <p className={"text-1xl mb-5"}>
                Alege cel putin o bautura pentru a vedea o estimare.</p>
        }
    }

    const editACtionCell = (id: number) => {
        return (
            <div className={"flex justify-center gap-5"}>
                <IconButton onClick={() => handleAddMenu(id)}>
                    <Image width={20} height={20}
                           src={"/icon-add.svg"} alt={"Icon add one"}/>
                </IconButton>

                <IconButton onClick={() => handleTrashMenu(id)}>
                    <Image width={20} height={20}
                           src={"/icon-trash.svg"} alt={"Icon remove all"}/>
                </IconButton>

                <IconButton onClick={() => handleSubstractMenu(id)}>
                    <Image width={20}
                           height={20}
                           src={"/icon-substract.svg"} alt={"Icon remove one"}/>
                </IconButton>
            </div>
        );
    }


    return (
        <div id={"total"}>

            <h2 className={"text-center text-5xl font-grotesk w-screen mb-10"}>
                Simulator petrecere
            </h2>

            <div className={"flex flex-col lg:flex-row justify-center align-middle"}>
                <div id={"edit"} className={"lg:w-1/2 flex flex-col align-middle justify-center gap-5"}>
                    <FormControl>
                        <FormLabel className={"text-center"} id="glass-material">
                            In ce fel de pahare ai vrea sa servim?
                            <Tooltip title={"Tipul paharului va influenta estimarea facuta final"}>
                                <IconButton>
                                    <InfoIcon className={"info-icon"}/>
                                </IconButton>
                            </Tooltip>
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="glass-material"
                            name="glass-material"
                            className={"flex justify-center"}
                            onChange={(e) => handleChangeGlass(e.target.value)}
                        >
                            <FormControlLabel value="carton" control={<Radio/>} label="carton"/>
                            <FormControlLabel value="plastic" control={<Radio/>} label="plastic"/>
                            <FormControlLabel value="sticla" control={<Radio/>} label="sticla"/>
                            <FormControlLabel value="cristal" control={<Radio/>} label="cristal"/>
                        </RadioGroup>
                    </FormControl>


                    <FormControl>
                        <FormLabel
                            id="time-scheduled"
                            className={"text-center"}>
                            Cat ai vrea sa fim prezenti la eveniment?

                            <Tooltip title={"Numarul de ore va influenta estimarea facuta la final"}>
                                <IconButton>
                                    <InfoIcon className={"info-icon"}/>
                                </IconButton>
                            </Tooltip>
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="time-scheduled"
                            name="time-scheduled"
                            className={"flex justify-center"}
                            onChange={(e) => handleSetPresence(e.target.value)}
                        >
                            <FormControlLabel value="4" control={<Radio/>} label="4"/>
                            <FormControlLabel value="5" control={<Radio/>} label="5"/>
                            <FormControlLabel value="6" control={<Radio/>} label="6"/>
                        </RadioGroup>
                    </FormControl>


                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Meniuri</TableCell>
                                <TableCell align="center">Cantati</TableCell>
                                <TableCell align="center">Pret meniu</TableCell>
                                <TableCell align="center">Modifica</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {menuState.map((order) => (
                                <TableRow
                                    key={order.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="center" scope="row">{order.name}</TableCell>
                                    <TableCell align="center" className={"text-center"}>{order.qty * 20} Litrii</TableCell>
                                    <TableCell align="center"
                                               className={"text-center"}>{menuItems[order.id - 1].price}</TableCell>
                                    <TableCell align="center"
                                               className={"text-center"}>{editACtionCell(order.id)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div id={"summary"} className={"lg:w-1/2 flex flex-col justify-center align-middle p-10 lg:p-0"}>
                    <h4 className={"my-5 text-2xl"}>Sumar</h4>
                    {getGlassesPerInvite()}
                    {getGlassesPrice()}
                    {getPresencePrice()}
                    {getTotalPrice()}
                </div>
            </div>


            <a
                className={"block w-full my-10 text-1xl text-center"}
                href={"https://docs.google.com/forms/d/e/1FAIpQLSfn4lNFZsvyWgJgikyNiEuoHle9zAQ1ISFcgBsfOGsM3gy7ag/viewform?usp=header"}
            >
                Da-ne parerea ta!
            </a>

            <div className={"flex justify-center align-middle gap-10 mb-10"}>
                <a
                    onClick={() => alert("Mail")}
                    className={"flex align-middle"}
                >
                    <Image width={49} height={49} src={"./icon-email.svg"} alt={"placeholder"} className={"w-24"}/>
                </a>
                <a
                    onClick={() => alert("Wapp")}
                    className={"flex align-middle"}
                >
                    <Image width={49} height={49} src={"./icon-whatsapp.svg"} alt={"placeholder"} className={"w-24"}/>
                </a>
            </div>
        </div>

    );
}

export default Total;