import express from "express";
import {
  createEducation,
  getEducations,
  deleteEducation,
  getEducation,
  updateEducation,
  isEducationTableEmpty,
} from "../controllers/education.controller.js";

const router = express.Router();

router.post("/create-education", createEducation);
router.get("/get-educations", getEducations);
router.delete("/delete-education/:id", deleteEducation);
router.get("/get-education/:id", getEducation);
router.post("/update-education/:id", updateEducation);
router.get('/is-empty', isEducationTableEmpty);

export default router;
