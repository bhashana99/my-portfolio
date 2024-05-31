import express from "express";
import { createWork,getWorks,deleteWork } from "../controllers/work.controller.js";

const router =  express.Router();

router.post("/create-work", createWork);
router.get("/get-works", getWorks);
router.delete("/delete-work/:id", deleteWork);

export default router;