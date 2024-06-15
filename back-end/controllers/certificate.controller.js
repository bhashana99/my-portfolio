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

export const getCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) {
            return next(errorHandler(404, "Certificate not found"));
        }

        res.status(200).json(certificate);

    } catch (error) {
        next(error)
    }
}

export const updateCertificate = async (req, res, next) => {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
        return next(errorHandler(404, "Certificate not found"));
    }

    try {
        const updatedCertificate = await Certificate.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedCertificate);
    } catch (error) {
        next(error);
    }
}

export const isCertificateTableEmpty = async (req, res, next) => {
    try {
        const count = await Certificate.countDocuments();
        const isEmpty = count === 0;
        return res.status(200).json({ isEmpty });
    } catch (error) {
        next(error);
    }
};