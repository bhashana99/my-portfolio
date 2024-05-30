import express from "express";
import { createCertificate,getCertificates } from "../controllers/certificate.controller.js";

const router = express.Router();

router.post("/create-certificate", createCertificate);
router.get("/get-certificates", getCertificates);

export default router;