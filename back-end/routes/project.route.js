import express from 'express';
import { createProject , getProjects,deleteProject} from '../controllers/project.controller.js';


const router = express.Router();

router.post('/create-project',createProject);
router.get('/get-projects',getProjects);
router.delete('/delete-project/:id',deleteProject);

export default router;