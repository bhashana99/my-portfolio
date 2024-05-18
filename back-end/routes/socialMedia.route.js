import express from 'express';
import { createSocialMedia,getSocialMedia,updateSocialMedia } from '../controllers/socialMedia.controller.js';


const router = express.Router();

router.post('/create-socialMedia',createSocialMedia);
router.get('/get-socialMedia',getSocialMedia);
router.post('/update-socialMedia/:id',updateSocialMedia);

export default router;