import React, {useState} from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    Typography
} from '@mui/material';

interface GlassOptionsProps {
    handleChangeGlass: (value: string) => void;
}

export const GlassOptions: React.FC<GlassOptionsProps> = ({handleChangeGlass}) => {

    const [selectedGlass, setSelectedGlass] = useState("plastic"); // Default to "plastic"

    const handleSelectChange = (event: any) => {
        setSelectedGlass(event.target.value);
        handleChangeGlass(event.target.value);
    };

    return (
        <div className={"flex flex-col lg:flex-row align-middle justify-center lg:justify-between gap-5"}>

            <div>
                <p className="mt-2 text-center lg:text-left text-2xl lg:text-2xl font-grotesk">
                    Cu ce fel de pahare ai vrea sa fie serviti invitatii?
                </p>
                <p className="text-center lg:text-left text-lg lg:text-1xl font-grotesk">
                    ( Tipul paharului va influenta estimarea finală )
                </p>
            </div>


            <FormControl>
                <Select
                    className={"p-0"}
                    value={selectedGlass}
                    onChange={handleSelectChange}
                    variant={"outlined"}>
                    <MenuItem value="carton">Carton</MenuItem>
                    <MenuItem value="plastic">Plastic</MenuItem>
                    <MenuItem value="sticla">Sticlă</MenuItem>
                    <MenuItem value="cristal">Cristal</MenuItem>
                </Select>
            </FormControl>
        </div>

    );
};
