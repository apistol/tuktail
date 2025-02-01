import React, {useState} from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from '@mui/material';

interface PresenceOptionsProps {
    handleSetPresence: (value: string) => void;
}

export const PresenceOptions: React.FC<PresenceOptionsProps> = ({handleSetPresence}) => {
    const [selectedPresence, setSelectedPresence] = useState("4"); // Default to 4 hours

    const handleSelectChange = (event: any) => {
        const value = event.target.value;
        setSelectedPresence(value);
        handleSetPresence(value);
    };

    return (
        <div  className={"flex flex-col lg:flex-row align-middle justify-center lg:justify-between gap-5"}>

            <div>
                <p className="mt-2 text-center lg:text-left t text-2xl lg:text-2xl font-grotesk">
                    Cate ore ai vrea sa ai tuk-ul la eveniment?
                </p>
                <p className="text-center lg:text-left text-lg lg:text-1xl font-grotesk mb-6">
                    (Tipul paharului va influenta estimarea finală)
                </p>

            </div>


            <FormControl>

                <Select
                    labelId="presence-label"
                    value={selectedPresence} // Default value
                    onChange={handleSelectChange}
                    className={"p-0"}
                    variant={"outlined"}>
                    <MenuItem value="4">4 ore</MenuItem>
                    <MenuItem value="5">5 ore</MenuItem>
                    <MenuItem value="6">6 ore</MenuItem>
                </Select>

            </FormControl>
        </div>

    );
};
