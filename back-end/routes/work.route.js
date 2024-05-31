import express from "express";
import { createWork,getWorks,deleteWork,getWork } from "../controllers/work.controller.js";

const router =  express.Router();

router.post("/create-work", createWork);
router.get("/get-works", getWorks);
router.delete("/delete-work/:id", deleteWork);
router.get("/get-work/:id", getWork);


export default router;