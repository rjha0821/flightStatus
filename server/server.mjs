// server.mjs
import express, { json } from 'express';
import cors from 'cors';
import flightStatusRoutes from './api/flightStatus.mjs';
import { addFlight } from './database/db.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.post('/api/flight_status', async (req, res) => {
    try {
        const { flightNumber, status, gate } = req.body;
        await addFlight({ flightNumber, status, gate });
        res.status(201).json({ message: 'Flight added successfully' });
    } catch (error) {
        console.error('Error adding flight:', error);
        res.status(500).json({ error: 'Failed to add flight' });
    }
});

app.use('/api/flight_status', flightStatusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
