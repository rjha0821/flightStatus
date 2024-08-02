// src/components/FlightStatus.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddFlightForm from './AddFlightForm';

const FlightStatus = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFlightStatus = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/flight_status`);
            setFlights(response.data);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Failed to fetch flight data.');
            console.error('Error fetching flight data:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFlightStatus();
        const intervalId = setInterval(fetchFlightStatus, 5000); // Polling every 5 seconds
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [fetchFlightStatus]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Flight Status</h1>
            <AddFlightForm onAdd={fetchFlightStatus} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <ul>
                {flights.map(flight => (
                    <li key={flight.flightNumber}>
                        Flight {flight.flightNumber} - Status: {flight.status} - Gate: {flight.gate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightStatus;
