import React from "react";
import {FloatingWhatsApp} from "react-floating-whatsapp";

interface FloatingContactBubbleProps {
    templateMsg: string;
}

const FloatingContactBubble: React.FC<FloatingContactBubbleProps> = ({
                                                                         templateMsg
                                                                     }) => {
    return (
        <div>
            {/* WhatsApp Integration */}
            <FloatingWhatsApp
                phoneNumber="+0762552951" // Replace with your WhatsApp number
                accountName="TukTeil"
                avatar="./background-hero.jpg" // Optional avatar image
                chatMessage="Buna ziua! Cum putem sa va ajutam?"
                statusMessage="Raspunde in cateva minute"
                placeholder={templateMsg}
                notification
                notificationSound
            />
            {/* Email Bubble */}
            {/*<div*/}
            {/*    style={{*/}
            {/*        position: "fixed",*/}
            {/*        bottom: "20px",*/}
            {/*        right: "100px",*/}
            {/*        backgroundColor: "#007BFF",*/}
            {/*        color: "#fff",*/}
            {/*        borderRadius: "50%",*/}
            {/*        width: "60px",*/}
            {/*        height: "60px",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*        justifyContent: "center",*/}
            {/*        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",*/}
            {/*        cursor: "pointer",*/}
            {/*    }}*/}
            {/*    onClick={() => window.location.href = "mailto:your-email@example.com"}*/}
            {/*    title="Send us an email"*/}
            {/*>*/}
            {/*</div>*/}
        </div>
    );
}

export default FloatingContactBubble;
