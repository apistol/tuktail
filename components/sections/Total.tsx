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
import {useEventContext} from "@/components/context";
import {useEffect, useState} from "react";
import {OrderItem} from "@/components/types/Order";




function Total() {

    const {menu, invites } = useEventContext()

    const [menuState, setMenuState] = useState<OrderItem[]>([]);

    useEffect(() => {
        setMenuState(menu);
    }, [menu.length]);


    const handleAddMenu = (id: number | string) => {
        setMenuState(prevState =>
            prevState.map(item => item.id === Number(id) ? { ...item, qty: item.qty + 1 } : item)
        );
    }

    const handleTrashMenu = (id: number) => {
        setMenuState(menuState.filter(item => item.id !== id));
    }

    const handleSubstractMenu = (id: number) => {
        setMenuState(menuState.map(item => item.id === id && item.qty > 1 ? {...item, qty: item.qty - 1} : item));
    }

    const editACtionCell = (id: number) => {
        return (
            <div className={"flex justify-center gap-5"}>
                <Image className={"buttons-total"} onClick={() => handleAddMenu(id)} width={30} height={30}
                       src={"/icon-add.svg"} alt={"Icon add one"}/>
                <Image className={"buttons-total"} onClick={() => handleTrashMenu(id)} width={30} height={30}
                       src={"/icon-trash.svg"} alt={"Icon remove all"}/>
                <Image className={"buttons-total"} onClick={() => handleSubstractMenu(id)} width={30} height={30}
                       src={"/icon-substract.svg"} alt={"Icon remove one"}/>
            </div>
        );
    }



    return (
        <>
            <h2 id={"menu"} className={"text-center text-5xl font-grotesk w-screen mb-20"}>SIMULATOR
                PETRECERE</h2>

            <div className={"flex flex-col lg:flex-row justify-center align-middle"}>
                <div id={"edit"} className={"lg:w-1/2 flex flex-col align-middle justify-center gap-5"}>
                    <FormControl>
                        <FormLabel className={"text-center"} id="glass-material">Material pahar</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="glass-material"
                            name="glass-material"
                            className={"flex justify-center"}
                        >
                            <FormControlLabel value="carton" control={<Radio/>} label="carton"/>
                            <FormControlLabel value="plastic" control={<Radio/>} label="plastic"/>
                            <FormControlLabel value="sticla" control={<Radio/>} label="sticla"/>
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio/>}
                                label="cristal"
                            />
                        </RadioGroup>
                    </FormControl>


                    <FormControl>
                        <FormLabel
                            id="time-scheduled"
                            className={"text-center"}>
                            Numar de ore
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="time-scheduled"
                            name="time-scheduled"
                            className={"flex justify-center"}
                        >
                            <FormControlLabel value="4" control={<Radio/>} label="4"/>
                            <FormControlLabel value="6" control={<Radio/>} label="6"/>
                            <FormControlLabel value="8" control={<Radio/>} label="8"/>
                        </RadioGroup>
                    </FormControl>


                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Meniuri</TableCell>
                                <TableCell align="center">Cantati</TableCell>
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
                                    <TableCell align="center" className={"text-center"}>{order.qty}</TableCell>
                                    <TableCell align="center"
                                               className={"text-center"}>{editACtionCell(order.id)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div id={"summary"} className={"lg:w-1/2 flex flex-col justify-center align-middle p-10 lg:p-0"}>
                    <h4 className={"my-10 text-3xl"}>Sumar</h4>
                    <br/>
                    <p className={"text-2xl"}>Pentru cei <strong>{invites}</strong> de invitati ai tai, vei avea
                        aproximativ <strong>{"X"}</strong> de bautura per invitat</p>
                    <br/>
                    <p className={"text-2xl"}>Costul total al bauturilor este de <strong>{"X"}</strong> lei</p>
                </div>
            </div>


            <h4 className={"my-10 text-3xl text-center"}>Cere un discount!</h4>

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
        </>

    );
}

export default Total;