import express from 'express';
import { createProject , getProjects} from '../controllers/project.controller.js';


const router = express.Router();

router.post('/create-project',createProject);
router.get('/get-projects',getProjects);

export default router;