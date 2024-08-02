import { databases } from './appWrite.mjs'; 
import dotenv from "dotenv";

dotenv.config();

const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.COLLECTION_ID;

// Mock data source (in real implementation, replace this with actual data source)
// const MOCK_FLIGHTS = [
//     { flightNumber: 'AA101', status: 'On Time', gate: 'A1' },
//     { flightNumber: 'BA202', status: 'Delayed', gate: 'B2' },
//     { flightNumber: 'CA303', status: 'Cancelled', gate: 'C3' }
// ];

const getFlightStatus = async (databases) => {
    try {
        const response = await databases.listDocuments(databaseId, collectionId);
        return response.documents;
    } catch (error) {
        console.error('Error fetching flight data:', error);
        throw new Error('Database error');
    }
};

export { getFlightStatus };