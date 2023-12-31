import express from 'express';


import routes from './routes';

import { validateRequestBody } from './middleware/validateRequestBody';




// Load environment variables


const app = express();

// Enable Cross Origin Resource Sharing


// Parse incoming requests data



// Validate request body
import validateRequestBody from './middleware/validateRequestBody';

// Log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Use routes
app.use('/api', routes);

// Add new route for Klu.AI Python SDK
app.get('/api', async (req, res) => {

  
});

// Catch all unhandled errors


export default app;
