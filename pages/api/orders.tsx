import clientPromise from "@/components/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("TukteilDB"); // Replace with your database name

            const result = await db.collection("events").find({}).toArray();

            res.status(200).json({ result });
        } catch (error) {
            console.error("Error retrieving orders from MongoDB:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}