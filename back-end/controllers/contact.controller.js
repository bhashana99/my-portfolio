import ContactInfo from "../models/contact.model.js";

export const createContactInfo = async (req, res, next) => {
    try {
        const contactInfo = await ContactInfo.create(req.body);
        return res.status(201).json(contactInfo);
    } catch (error) {
        next(error);
    }
}