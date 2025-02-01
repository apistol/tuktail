import React from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, IconButton} from '@mui/material';
import Image from 'next/image';

// interface MenuItem {
//     id: number;
//     name: string;
//     price: number;
// }

interface Order {
    id: number;
    name: string;
    qty: number;
}

interface MenuTableProps {
    menuState: Order[];
    menuItems: any;
    handleAddMenu: (id: number) => void;
    handleTrashMenu: (id: number) => void;
    handleSubstractMenu: (id: number) => void;
}

export const MenuTable: React.FC<MenuTableProps> = ({
                                                        menuState,
                                                        menuItems,
                                                        handleAddMenu,
                                                        handleTrashMenu,
                                                        handleSubstractMenu
                                                    }) => (
    <div>
        <p className="mt-2 text-center lg:text-left text-2xl lg:text-2xl font-mono mb-6">
            Comanda ta
        </p>
        <div className="overflow-x-auto">
            <div style={{minWidth: "400px", border: "1px solid #A67C52"}}>
                <Table aria-label="simple table" className="overflow-x-auto">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Meniuri</TableCell>
                            <TableCell align="center">Cantitate</TableCell>
                            <TableCell align="center">Pret meniu</TableCell>
                            <TableCell align="center">Modifica</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menuState.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell align="center">{order.name}</TableCell>
                                <TableCell align="center">{order.qty * 20} Litri</TableCell>
                                <TableCell align="center">{menuItems[order.id - 1].price} RON</TableCell>
                                <TableCell align="center">
                                    <div className="flex justify-center gap-1">
                                        <IconButton onClick={() => handleAddMenu(order.id)}>
                                            <Image width={20} height={20} src="/icon-add.svg" alt="Icon add one"/>
                                        </IconButton>
                                        <IconButton onClick={() => handleTrashMenu(order.id)}>
                                            <Image width={20} height={20} src="/icon-trash.svg" alt="Icon remove all"/>
                                        </IconButton>
                                        <IconButton onClick={() => handleSubstractMenu(order.id)}>
                                            <Image width={20} height={20} src="/icon-substract.svg"
                                                   alt="Icon remove one"/>
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>

);