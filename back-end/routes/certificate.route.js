import express from "express";
import { createCertificate } from "../controllers/certificate.controller.js";

const router = express.Router();

router.post("/create-certificate", createCertificate);

export default router;