import express from "express";
import {
  createCertificate,
  getCertificates,
  deleteCertificate,
  getCertificate,
  updateCertificate,
  isCertificateTableEmpty
} from "../controllers/certificate.controller.js";

const router = express.Router();

router.post("/create-certificate", createCertificate);
router.get("/get-certificates", getCertificates);
router.delete("/delete-certificate/:id", deleteCertificate);
router.get("/get-certificate/:id", getCertificate);
router.post("/update-certificate/:id", updateCertificate);
router.get('/is-empty', isCertificateTableEmpty);

export default router;
