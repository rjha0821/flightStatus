import axios from 'axios';

const fetchFlightStatus = async () => {
    try {
        const response = await axios.get('/api/flight_status');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching flight status');
    }
};

export { fetchFlightStatus };
