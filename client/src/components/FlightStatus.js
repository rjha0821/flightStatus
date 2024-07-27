import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlightStatus = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchFlightStatus();
    }, []);

    const fetchFlightStatus = async () => {
        try {
            const response = await axios.get('/api/flight_status');
            setFlights(response.data);
        } catch (error) {
            console.error('Error fetching flight status:', error);
            toast.error('Failed to fetch flight status.');
        }
    };

    return (
        <div>
            <h1>Flight Status</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Status</th>
                        <th>Gate</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        <tr key={index}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.status}</td>
                            <td>{flight.gate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default FlightStatus;
