import express from 'express';
import { createBasicInfo, updateBasicInfo ,getBasicInfo} from '../controllers/basicInfo.controller.js';


const router = express.Router();

router.post('/create-basicInfo',createBasicInfo);
router.post('/update-basicInfo/:id',updateBasicInfo);
router.get('/get-basicInfo',getBasicInfo);

export default router;