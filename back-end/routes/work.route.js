import express from "express";
import { createWork,getWorks } from "../controllers/work.controller.js";

const router =  express.Router();

router.post("/create-work", createWork);
router.get("/get-works", getWorks);

export default router;