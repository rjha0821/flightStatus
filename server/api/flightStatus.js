const express = require('express');
const { getFlightStatus } = require('../database/db');
const { sendNotification } = require('../notifications/notify');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const flights = await getFlightStatus();
        sendNotification({ type: 'fetch', data: flights });
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
