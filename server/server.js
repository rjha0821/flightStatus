const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const flightStatusRoutes = require('./api/flightStatus');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/flight_status', flightStatusRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/flightstatusdb';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
