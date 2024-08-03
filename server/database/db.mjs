// db.mjs
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'flight_status',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getFlightStatus = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM flights');
        return rows;
    } catch (error) {
        console.error('Error fetching flight data:', error);
        throw new Error('Database error');
    }
};

const addFlight = async ({ flightNumber, status, gate }) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO flights (flightNumber, status, gate) VALUES (?, ?, ?)',
            [flightNumber, status, gate]
        );
        return result;
    } catch (error) {
        console.error('Error adding flight:', error);
        throw new Error('Database error');
    }
};

export { getFlightStatus, addFlight };
