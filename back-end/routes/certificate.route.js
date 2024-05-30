import express from "express";
import { createCertificate,getCertificates,deleteCertificate } from "../controllers/certificate.controller.js";

const router = express.Router();

router.post("/create-certificate", createCertificate);
router.get("/get-certificates", getCertificates);
router.delete("/delete-certificate/:id", deleteCertificate);


export default router;