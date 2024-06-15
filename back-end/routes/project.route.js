import express from "express";
import {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getProject,
  isProjectTableEmpty,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create-project", createProject);
router.get("/get-projects", getProjects);
router.delete("/delete-project/:id", deleteProject);
router.post("/update-project/:id", updateProject);
router.get("/get-project/:id", getProject);
router.get('/is-empty', isProjectTableEmpty);

export default router;
