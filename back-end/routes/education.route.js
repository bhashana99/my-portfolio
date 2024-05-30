import express from 'express';
import { createEducation } from '../controllers/education.controller.js';

const router = express.Router();

router.post('/create-education', createEducation);

export default router;