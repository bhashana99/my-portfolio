import express from 'express'
import { createContactInfo ,getContactInfo,updateContactInfo} from '../controllers/contact.controller.js'

const router = express.Router();

router.post('/create-contactInfo', createContactInfo);
router.get('/get-contactInfo', getContactInfo);
router.post('/update-contactInfo/:id', updateContactInfo);

export default router;