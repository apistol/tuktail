import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGO_URI as string; // Add your MongoDB connection string in .env.local
const options: MongoClientOptions = {
    tlsAllowInvalidCertificates: true, // Add this line
    serverSelectionTimeoutMS: 5000, // Add a timeout for server selection
    socketTimeoutMS: 45000, // Add a timeout for socket operations
};

let client = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGO_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable to preserve the client across hot reloads
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
