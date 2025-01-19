import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    IconButton,
    Popover,
    Typography,
    Button
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface PresenceOptionsProps {
    handleSetPresence: (value: string) => void;
}

export const PresenceOptions: React.FC<PresenceOptionsProps> = ({ handleSetPresence }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleTooltipOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTooltipClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <FormControl>
            <FormLabel id="time-scheduled" className="text-center">
                Cat ai vrea sa ai tuk-ul la eveniment?
                <IconButton onClick={handleTooltipOpen}>
                    <InfoIcon className="info-icon" />
                </IconButton>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleTooltipClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <div style={{ padding: '10px', maxWidth: '200px' }}>
                        <Typography variant="body2">
                            Numarul de ore va influenta estimarea facuta la final.
                        </Typography>
                        <Button
                            size="small"
                            variant="text"
                            onClick={handleTooltipClose}
                            style={{ marginTop: '8px', textAlign: 'right' }}
                        >
                            Close
                        </Button>
                    </div>
                </Popover>
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
};
