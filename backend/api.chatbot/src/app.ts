import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { loadEnvVars } from './middleware/loadEnvVars';
import { validateRequestBody } from './middleware/validateRequestBody';
import logger from './utils/logger';
import { KluAISDK } from './kluai-sdk.py';

// Load environment variables
loadEnvVars();

const app = express();

// Enable Cross Origin Resource Sharing
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Validate request body
app.use(validateRequestBody);

// Log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Use routes
app.use('/api', routes);

// Add new route for Klu.AI Python SDK
app.get('/api', async (req, res) => {
  // Add your Klu.AI Python SDK code here
  const kluAISDK = new KluAISDK(process.env.KLU_API_KEY);
});

// Catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
