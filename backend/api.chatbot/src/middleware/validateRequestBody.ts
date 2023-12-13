import Joi from 'joi';
import { LOGGER_SERVICE } from '../constants';
import logger from '../utils/logger';

/**
 * Middleware to validate request body
 * @param {Object} schema - Joi schema
 * @returns {Function} Middleware function
 */
const validateRequestBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      logger.error({
        service: LOGGER_SERVICE,
        message: error.details[0].message,
      });

      return res.status(400).send({
        status: 'error',
        message: 'Invalid request data',
        data: error.details[0].message,
      });
    }

    next();
  };
};

export default validateRequestBody;
