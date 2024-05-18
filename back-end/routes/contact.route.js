import express from 'express'
import { createContactInfo ,getContactInfo} from '../controllers/contact.controller.js'

const router = express.Router();

router.post('/create-contactInfo', createContactInfo);
router.get('/get-contactInfo', getContactInfo);

export default router;