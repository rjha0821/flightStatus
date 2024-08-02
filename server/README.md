# Flight Status and Notifications System - Backend

This backend provides a Node.js-based API for real-time flight status updates and push notifications. It integrates with MongoDB for data storage and Kafka for sending notifications.

## Features

- **Flight Status API**: Endpoint to retrieve current flight status including delays, cancellations, and gate changes.
- **Push Notifications**: Sends notifications for flight status changes via Kafka.
- **Integration with MongoDB**: Manages flight data and user notification preferences.

## Technologies

- **Backend**: Node.js, Express
- **Database**: Appwrite
- **Notifications**: Kafka

## Project Structure

```
server/
├── api/
│ └── flightStatus.js # Routes and handlers for flight status
├── database/
│ └── db.js # MongoDB integration and data retrieval
├── notifications/
│ └── notify.js # Kafka producer for sending notifications
└── server.js # Entry point for the Node.js server
```

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
- Kafka

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/flight-status.git
    cd flight-status
    ```

2. **Set up Appwrite:**
    - Follow the Appwrite documentation to set up your Appwrite instance.
    - Configure the Appwrite environment and create necessary databases and collections.
    - Update your .env file with Appwrite configuration:

    ```sh
    APPWRITE_ENDPOINT=http://localhost/v1
    APPWRITE_PROJECT_ID=your_project_id
    DATABASE_ID=your_database_id
    COLLECTION_ID=your_collection_id
    APPWRITE_API_KEY=your_appwrite_api_key
    ```

3. **Set up Kafka:**
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

4. **Set up the Node.js backend:**
    ```sh
    cd server
    npm install
    node server.js
    ```

## Usage

- **Backend Port**: The backend runs on port 5000.
- **Frontend Integration**: Ensure that the frontend is configured to proxy requests to the backend at `http://localhost:5000`.

## System Flow

### 1. API Endpoints

- **Flight Status Endpoint**: `/api/flight_status`
  - Retrieves current flight status from MongoDB.

### 2. Fetching Flight Data

- The backend fetches flight status data from MongoDB and responds to requests from the frontend.

### 3. Notification Handling

- Flight status changes are detected and processed.
- Notifications are sent to Kafka, which handles the delivery of updates.

### 4. Push Notifications

- Kafka sends notifications based on user preferences (e.g., SMS, email, app notifications).

## Environment Variables

Ensure that the following environment variables are set in a `.env` file:

This setup ensures that the backend is correctly configured to manage flight data and notifications in real-time.

For additional details on the configuration and usage of Kafka and MongoDB, refer to their respective documentation.