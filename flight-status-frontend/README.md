# Flight Status Client

This directory contains the React frontend for the Flight Status and Notifications System.

## Features

- Display current flight status including delays, cancellations, and gate changes.
- Real-time updates using data from the backend.
- User-friendly interface with real-time polling for updates.

## Project Structure

```
client/
├── src/
│ ├── components/
│ │ ├── FlightStatus.js # Main component for displaying flight status
│ │ └── AddFlightForm.js # Form component for adding new flights
│ ├── services/
│ │ └── flightService.js # Service for interacting with the backend API
│ ├── App.js # Main application component
│ └── index.js # Entry point for the React application
├── public/
│ ├── index.html # Main HTML file
│ └── ... (other public files)
├── package.json # Project dependencies and scripts
└── ... (other React files and folders)
```

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)

### Installation

1. **Navigate to the client directory:**
    ```sh
    cd client
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

    This will start the React development server and open the application in your default web browser. The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Frontend Port**: The frontend runs on port 3000 by default.
- **Backend Integration**: Ensure that the backend server is running on port 5000 to proxy requests properly.

## Notes

- If you encounter any issues with missing dependencies or packages, ensure that they are listed in `package.json` and run `npm install` to resolve them.
- For any configuration or environment-specific settings, refer to the `.env` file or create one based on the provided `.env.example` file.

## Learn More

To learn more about React and how to work with Create React App, check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).
