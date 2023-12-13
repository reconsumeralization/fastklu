import express from 'express';
import apiController from '../controllers/apiController';
import { userController } from '../controllers/userController';
import { API_ROUTES } from './constants';

const router = express.Router();

// Define API routes
router.use(API_ROUTES.BASE, apiController);

// Define User routes
router.use('/user', userController);

export default router;
