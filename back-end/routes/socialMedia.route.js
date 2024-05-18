import express from 'express';
import { createSocialMedia } from '../controllers/socialMedia.controller.js';


const router = express.Router();

router.post('/create-socialMedia',createSocialMedia);

export default router;