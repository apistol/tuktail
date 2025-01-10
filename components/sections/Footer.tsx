import React from 'react';

function Footer() {
    return (
        <div className={"flex flex-col lg:flex-row bg-black p-10"}>
            <div className={"lg:w-1/3"}>
                <h3 className={"text-white"}><strong>Despre noi</strong></h3>
                <p className={"text-white"}>Hranim sufletele petrecerii</p>
                <br/>
                <h3 className={"text-white"}><strong>Adresa</strong></h3>
                <p className={"text-white"}>Ilfov, BERCENI, Str. MIORITA, Nr. 204 N, județ ILFOV</p>
            </div>

            <div className={"lg:w-1/3"}>
                <h3 className={"text-white"}><strong>Contact</strong></h3>
                <p className={"text-white"}>Telefon: 0123456789</p>
                <p className={"text-white"}>Email: </p>
                <br/>
                <h3 className={"text-white"}><strong>Contact</strong></h3>
                <p className={"text-white"}>Firma: SOCIETY DXB S.R.L.</p>
                <p className={"text-white"}>CUI:50336024 </p>
            </div>

            <div className={"lg:w-1/3"}>
                <h3 className={"text-white"}><strong>Link-uri utile</strong></h3>
                <p className={"text-white"}>Termeni si conditii</p>
                <p className={"text-white"}>GDPR</p>
            </div>
        </div>
    );
}

export default Footer;