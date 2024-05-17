import express from 'express';
import { createBasicInfo } from '../controllers/basicInfo.controller.js';


const router = express.Router();

router.post('/create-basicInfo',createBasicInfo);

export default router;