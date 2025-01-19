import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        email: false,
        city: false,
    });

    const validateForm = () => {
        const newErrors = {
            name: !formData.name.trim(),
            phone: !/^\+?\d{10,15}$/.test(formData.phone),
            email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
            city: !formData.city.trim(),
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form Data:", formData);
            onClose();
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Modal open={open} onClose={onClose}  style={{background: "#F3E8E1"}}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 24,
                }}
            >
                <Typography variant="h6" mb={2}>
                    Completeaza detaliile
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nume"
                            variant="outlined"
                            value={formData.name}
                            error={errors.name}
                            helperText={errors.name && "Nume obligatoriu"}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Telefon"
                            variant="outlined"
                            value={formData.phone}
                            error={errors.phone}
                            helperText={errors.phone && "Telefon invalid"}
                            onChange={(e) =>
                                handleChange("phone", e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={formData.email}
                            error={errors.email}
                            helperText={errors.email && "Email invalid"}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Oras"
                            variant="outlined"
                            value={formData.city}
                            error={errors.city}
                            helperText={errors.city && "Oras obligatoriu"}
                            onChange={(e) => handleChange("city", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <button
                            className={"text-center custom-button mx-auto text-sm"}
                            onClick={handleSubmit}
                        >
                            Trimite
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ContactModal;
