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

interface GlassOptionsProps {
    handleChangeGlass: (value: string) => void;
}

export const GlassOptions: React.FC<GlassOptionsProps> = ({ handleChangeGlass }) => {
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
            <FormLabel className="text-center flex" id="glass-material">
                Cu ce fel de pahare ai vrea sa fie serviti invitatii?
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
                            Tipul paharului va influenta estimarea facuta final.
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
                aria-labelledby="glass-material"
                name="glass-material"
                className="flex justify-center"
                onChange={(e) => handleChangeGlass(e.target.value)}
            >
                <FormControlLabel value="carton" control={<Radio />} label="carton" />
                <FormControlLabel value="plastic" control={<Radio />} label="plastic" />
                <FormControlLabel value="sticla" control={<Radio />} label="sticla" />
                <FormControlLabel value="cristal" control={<Radio />} label="cristal" />
            </RadioGroup>
        </FormControl>
    );
};
