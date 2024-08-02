// src/components/AddFlightForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddFlightForm = ({ onAdd }) => {
    const [flightNumber, setFlightNumber] = useState('');
    const [status, setStatus] = useState('');
    const [gate, setGate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/flight_status`, {
                flightNumber,
                status,
                gate
            });
            // Remove toast notifications
            alert('Flight added successfully!');
            onAdd(); // Notify parent component to refresh data
        } catch (error) {
            // Remove toast notifications
            alert('Failed to add flight.');
            console.error('Error adding flight:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Flight Number:</label>
                <input
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Gate:</label>
                <input
                    type="text"
                    value={gate}
                    onChange={(e) => setGate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Flight</button>
        </form>
    );
};

export default AddFlightForm;
