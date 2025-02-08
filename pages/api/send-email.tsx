import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { phone, email, menu, invites, glassType, presence } = req.body;

        try {
            // Create a transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'tukteiloffice@gmail.com', // Replace with your email
                    pass: 'HaiSaFacemBani01012025!!', // Replace with your email password
                },
                tls: {
                    rejectUnauthorized: false, // Add this to ignore self-signed certificate errors
                },
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