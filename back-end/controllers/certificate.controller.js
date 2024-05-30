import Certificate from "../models/certificate.model.js";

export const createCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.create(req.body);
        return res.status(201).json(certificate);
    } catch (error) {
        next(error);
    }
}

export const getCertificates = async (req, res, next) => {
    try {
        const certificates = await Certificate.find();
        if (!certificates) {
            return res.status(404).json({ message: "Certificates not found!" });
        }
        return res.status(200).json(certificates);
    } catch (error) {
        next(error);
    }
}

export const deleteCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) {
            return res.status(404).json({ message: "Certificate not found!" });
        }

        await Certificate.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Certificate deleted!" });
    } catch (error) {
     next(error);   
    }
}