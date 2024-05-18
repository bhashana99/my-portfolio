import express from 'express'
import { createContactInfo } from '../controllers/contact.controller.js'

const router = express.Router();

router.post('/create-contactInfo', createContactInfo);

export default router;