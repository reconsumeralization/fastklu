const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { loadEnvVars } = require('./middleware/loadEnvVars');
const { validateRequestBody } = require('./middleware/validateRequestBody');
const logger = require('./utils/logger');

// Load environment variables
loadEnvVars();

const app = express();

// Enable Cross Origin Resource Sharing
app.use(cors());

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Validate request body
app.use(validateRequestBody);

// Log requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Use routes
app.use('/api', routes);

// Catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
