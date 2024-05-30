import express from 'express';
import { createEducation,getEducations } from '../controllers/education.controller.js';

const router = express.Router();

router.post('/create-education', createEducation);
router.get('/get-educations', getEducations);

export default router;