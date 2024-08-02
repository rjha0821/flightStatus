import { Router } from 'express';
import { getFlightStatus } from '../database/db.mjs';
import { sendNotification } from '../notifications/notify.mjs';
const router = Router();

const flightStatusRoutes = (databases) => {
    router.get('/', async (req, res) => {
        try {
            const flights = await getFlightStatus(databases);
            sendNotification({ type: 'fetch', data: flights });
            res.status(200).json(flights);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
};

export default flightStatusRoutes;
