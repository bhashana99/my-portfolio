import express from "express";
import { createWork } from "../controllers/work.controller.js";

const router =  express.Router();

router.post("/create-work", createWork);

export default router;