import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.API_KEY || '',
  apiSecret: process.env.API_SECRET || '',
};

export default config;
