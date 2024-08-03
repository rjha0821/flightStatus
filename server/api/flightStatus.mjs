// flightStatus.mjs
import { Router } from 'express';
import { getFlightStatus } from '../database/db.mjs';
import { sendNotification } from '../notifications/notify.mjs';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const flights = await getFlightStatus();
        sendNotification({ type: 'fetch', data: flights });
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
