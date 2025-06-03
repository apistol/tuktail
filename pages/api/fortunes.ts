import clientPromise from "@/components/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { message } = req.body;
            
            if (!message || typeof message !== 'string') {
                return res.status(400).json({ error: "Message is required" });
            }

            const client = await clientPromise;
            const db = client.db("Tukteil");

            const result = await db.collection("fortunes").insertOne({
                message,
                createdAt: new Date(),
            });

            res.status(201).json({ success: true, id: result.insertedId });
        } catch (error) {
            console.log(error);
            console.error("Error saving fortune to MongoDB:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
} 