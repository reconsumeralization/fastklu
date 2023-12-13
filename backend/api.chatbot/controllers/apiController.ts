import express from 'express';
import { db } from '../models/db';
import logger from '../utils/logger';

/**
 * API Controller for Klu Chatbot
 */

const router = express.Router();

// Handle GET request to /api
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM api');
    res.status(200).json(result.rows);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle POST request to /api
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await db.query('INSERT INTO api (name, description) VALUES ($1, $2) RETURNING *', [name, description]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
