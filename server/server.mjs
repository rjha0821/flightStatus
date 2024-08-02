import express, { json } from 'express';
import cors from 'cors';
import { databases } from './database/appWrite.mjs';
import flightStatusRoutes from './api/flightStatus.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.COLLECTION_ID;

app.post('/api/flight_status', async (req, res) => {
    try {
        const { flightNumber, status, gate } = req.body;
        await databases.createDocument(databaseId, collectionId, 'unique()', {
            flightNumber,
            status,
            gate
        });
        res.status(201).json({ message: 'Flight added successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'Failed to add flight' });
    }
});

app.use('/api/flight_status', flightStatusRoutes(databases));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});