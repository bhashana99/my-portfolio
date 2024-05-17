import express from 'express';
import { createBasicInfo, updateBasicInfo } from '../controllers/basicInfo.controller.js';


const router = express.Router();

router.post('/create-basicInfo',createBasicInfo);
router.post('/update-basicInfo/:id',updateBasicInfo);

export default router;