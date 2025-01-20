import clientPromise from "@/components/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, phone, email, city,  menu, invites, glassType , presence} = req.body;
        if (!name || !phone || !email || !city) {
            return res.status(400).json({ error: "All fields are required" });
        }
        
        try {
            const client = await clientPromise;
            const db = client.db("TukteilDB"); // Replace with your database name

            const result = await db.collection("events").insertOne({
                name,
                phone,
                email,
                city,
                menu,
                invites,
                glassType,
                presence,
                createdAt: new Date(),
            });

            res.status(200).json({ message: "Form submitted successfully", result });
        } catch (error) {
            console.error("Error saving to MongoDB:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
