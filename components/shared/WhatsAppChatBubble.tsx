import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingContactBubble: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+40762552951?text=Salutare! Vreau sa organizez cea mai buna petrecere!', '_blank');
    };

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
            <IconButton
                style={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                }}
                onClick={handleWhatsAppClick}
            >
                <WhatsAppIcon style={{ fontSize: "28px" }} />
            </IconButton>
        </div>
    );
};

export default FloatingContactBubble;
