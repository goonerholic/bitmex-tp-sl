import BitMEXClient from 'bitmex-realtime-api';
import config from '../config';

const { apiKey, apiSecret } = config;

const client = new BitMEXClient({
  testnet: false,
  apiKeyID: apiKey,
  apiKeySecret: apiSecret,
});

export default client;
