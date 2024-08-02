// appwrite.mjs
import { Client, Databases } from 'node-appwrite';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client();
client
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Appwrite Cloud endpoint
  .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY); // Your API key

const databases = new Databases(client);

export { databases };
