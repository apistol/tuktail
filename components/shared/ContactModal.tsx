import React, {useState} from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Grid,
    Snackbar,
    Alert,
} from "@mui/material";
import axios from "axios";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
    payloadModal: any;
}

const ContactModal: React.FC<ContactModalProps> = ({open, onClose, payloadModal}) => {
    const [formData, setFormData] = useState({
        ...payloadModal,
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastOpen, setToastOpen] = useState(false); // State to control toast visibility
    const [toastMessage, setToastMessage] = useState("");
    const [toastSeverity, setToastSeverity] = useState<"success" | "error">(
        "success"
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData((prev:  any) => ({...prev, [name]: value}));
    };

    const validateForm = () => {
        const newErrors = {
            name: formData.name.trim() === "",
            phone: !/^\+?\d{10,15}$/.test(formData.phone),
            email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
            city: formData.city.trim() === "",
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            console.log("formData : ")
            console.log(formData)
            const response = await axios.post("/api/contact", {...formData, ...payloadModal});
            console.log("Form submitted successfully:", response.data);

            // Show success toast
            setToastMessage("Mesajul a fost trimis cu succes!");
            setToastSeverity("success");
            setToastOpen(true);

            // Clear form and close modal
            setFormData({name: "", phone: "", email: "", city: ""});
            onClose();
        } catch (error) {
            console.error("Error submitting form:", error);

            // Show error toast
            setToastMessage("Eroare la trimiterea mesajului. Încercați din nou.");
            setToastSeverity("error");
            setToastOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleToastClose = () => {
        setToastOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
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
                        Completează detaliile
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nume"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                error={errors.name}
                                helperText={errors.name && "Numele este obligatoriu"}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Telefon"
                                name="phone"
                                variant="outlined"
                                value={formData.phone}
                                error={errors.phone}
                                helperText={errors.phone && "Număr de telefon invalid"}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                variant="outlined"
                                value={formData.email}
                                error={errors.email}
                                helperText={errors.email && "Adresă de email invalidă"}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Oraș"
                                name="city"
                                variant="outlined"
                                value={formData.city}
                                error={errors.city}
                                helperText={errors.city && "Orașul este obligatoriu"}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <button
                                className={"text-center custom-button mx-auto text-sm"}
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Se trimite..." : "Trimite"}
                            </button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            {/* Snackbar for Toast Notifications */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={6000}
                onClose={handleToastClose}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert
                    onClose={handleToastClose}
                    severity={toastSeverity}
                    sx={{width: "100%"}}
                >
                    {toastMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ContactModal;
