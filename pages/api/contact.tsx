import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { phone, email, menu, invites, glassType, presence } = req.body;

        try {
            // Create a transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,         // Use 587 for STARTTLS
                secure: false, // true for port 465
                auth: {
                    user: 'tukteiloffice@gmail.com', // Replace with your email
                    pass: 'zgmf slvw rzky jucb', // Replace with your email password
                },
                tls: {
                    rejectUnauthorized: false, // Add this to ignore self-signed certificate errors
                    minVersion: "TLSv1.2",
                },
                logger: true, // Enable logging
                debug: true, // Enable debug output
            });

            // Set up email data
            const mailOptions = {
                from: 'tukteiloffice@gmail.com', // Replace with your email
                to: 'tukteiloffice@gmail.com',
                subject: 'New Event Request',
                text: `Phone: ${phone}
                \nEmail: ${email}
                \n Menu: ${menu}
                \n Invites: ${invites}
                \nGlass Type: ${glassType}
                \nPresence: ${presence}`,
            };

            // Send email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}