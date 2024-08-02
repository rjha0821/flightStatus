# Flight Status and Notifications System

This project provides a system to offer real-time flight status updates and notifications to passengers. It includes both a Node.js backend and a React frontend.

## Features

- **Real-time Updates**: Display current flight status (delays, cancellations, gate changes).
- **Push Notifications**: Send notifications for flight status changes via Kafka.
- **Integration with Airport Systems**: Mock data integration for accurate information.

## Technologies

- **Frontend**: HTML, CSS, React.js
- **Backend**: Node.js, Express
- **Database**: Appwrite (used instead of MongoDB)
- **Notifications**: Kafka

## Project Structure
```
flight-status/
│
├── server/
│ ├── api/
│ │ └── flightStatus.mjs
│ ├── database/
│ │ └── db.mjs
│ ├── notifications/
│ │ └── notify.mjs
│ ├── appwrite.mjs
│ └── server.mjs
│
└── client/
├── src/
│ ├── components/
│ │ ├── FlightStatus.js
│ │ └── AddFlightForm.js
│ ├── services/
│ │ └── flightService.js
│ ├── App.js
│ └── index.js
├── public/
├── package.json
└── ... (other React files and folders)
```


## Setup Instructions

### Prerequisites

- Node.js
- Appwrite
- Kafka

### Installation

1. **Clone the Repository:**

    ```sh
    git clone https://github.com/your-username/flight-status.git
    cd flight-status
    ```

2. **Set Up Appwrite:**

    - Ensure Appwrite is running and configured. Update `.env` file in `server/` directory with Appwrite settings.

3. **Set Up Kafka:**

    - Start the Zookeeper server:
    
      ```sh
      cd path/to/kafka
      bin/zookeeper-server-start.sh config/zookeeper.properties
      ```

    - Start the Kafka server:
    
      ```sh
      bin/kafka-server-start.sh config/server.properties
      ```

    - Create the `flight_status_updates` topic:
    
      ```sh
      bin/kafka-topics.sh --create --topic flight_status_updates --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
      ```

4. **Set Up the Node.js Backend:**

    ```sh
    cd server
    npm install
    node server.mjs
    ```

5. **Set Up the React Frontend:**

    ```sh
    cd ../client
    npm install
    npm start
    ```

## Usage

- **Backend**: Runs on port 5000
- **Frontend**: Runs on port 3000 (configured to proxy requests to the backend)

Visit `http://localhost:3000` in your browser to view the flight status application.

## System Flow

### 1. User Interaction

Users interact with the application through their web browser. They can:
- View the Flight Status Dashboard to see a list of flights and their current statuses.
- Click on a flight to view detailed information about that flight.
- Set their notification preferences.

### 2. Fetching Flight Data

- The React frontend sends requests to the Node.js backend API.
- The backend retrieves flight status data from the Appwrite database.
- The data is sent back to the frontend for display.

### 3. Notification Preferences

- Users set their notification preferences (e.g., SMS, email) through the frontend.
- Preferences are sent to the backend and stored in Appwrite.

### 4. Handling Status Updates

- Flight status changes are detected and processed by the backend.
- Notifications about status changes are sent to Kafka.

### 5. Push Notifications

- Kafka processes the notifications and sends them to users based on their preferences.
- Notifications are delivered via SMS, email, or app notifications.

This flow ensures that users receive real-time updates about their flights and can configure their preferences for receiving notifications.


## Acknowledgments

- [Appwrite](https://appwrite.io/) for the database services.
- [Kafka](https://kafka.apache.org/) for messaging.
- [Node.js](https://nodejs.org/) for the server runtime.
- [React](https://reactjs.org/) for the frontend framework.

