import express from "express";
import {
  createWork,
  getWorks,
  deleteWork,
  getWork,
  updateWork,
  isWorkTableEmpty,
} from "../controllers/work.controller.js";

const router = express.Router();

router.post("/create-work", createWork);
router.get("/get-works", getWorks);
router.delete("/delete-work/:id", deleteWork);
router.get("/get-work/:id", getWork);
router.post("/update-work/:id", updateWork);
router.get('/is-empty', isWorkTableEmpty);

export default router;
