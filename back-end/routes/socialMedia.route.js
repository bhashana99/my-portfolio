import express from 'express';
import { createSocialMedia,getSocialMedia } from '../controllers/socialMedia.controller.js';


const router = express.Router();

router.post('/create-socialMedia',createSocialMedia);
router.get('/get-socialMedia',getSocialMedia);

export default router;