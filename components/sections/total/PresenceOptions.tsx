import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface PresenceOptionsProps {
    handleSetPresence: (value: string) => void;
}

export const PresenceOptions: React.FC<PresenceOptionsProps> = ({ handleSetPresence }) => (
    <FormControl>
        <FormLabel id="time-scheduled" className="text-center">
            Cat ai vrea sa ai tuk-ul la eveniment?
            <Tooltip title="Numarul de ore va influenta estimarea facuta la final">
                <IconButton>
                    <InfoIcon className="info-icon" />
                </IconButton>
            </Tooltip>
        </FormLabel>
        <RadioGroup
            row
            aria-labelledby="time-scheduled"
            name="time-scheduled"
            className="flex justify-center"
            onChange={(e) => handleSetPresence(e.target.value)}
        >
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
            <FormControlLabel value="6" control={<Radio />} label="6" />
        </RadioGroup>
    </FormControl>
);