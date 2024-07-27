const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: String,
    status: String,
    gate: String
});

const Flight = mongoose.model('Flight', flightSchema);

// Mock data source (in real implementation, replace this with actual data source)
const MOCK_FLIGHTS = [
    { flightNumber: 'AA101', status: 'On Time', gate: 'A1' },
    { flightNumber: 'BA202', status: 'Delayed', gate: 'B2' },
    { flightNumber: 'CA303', status: 'Cancelled', gate: 'C3' }
];

const getFlightStatus = async () => {
    // Replace this with actual database fetching logic
    return MOCK_FLIGHTS;
};

module.exports = { getFlightStatus, Flight };
