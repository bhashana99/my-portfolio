import Certificate from "../models/certificate.model.js";

export const createCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.create(req.body);
        return res.status(201).json(certificate);
    } catch (error) {
        next(error);
    }
}