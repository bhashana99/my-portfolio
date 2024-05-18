import ContactInfo from "../models/contact.model.js";

export const createContactInfo = async (req, res, next) => {
    try {
        const contactInfo = await ContactInfo.create(req.body);
        return res.status(201).json(contactInfo);
    } catch (error) {
        next(error);
    }
}

export const getContactInfo = async (req, res, next) => {
    try {
        const contactInfo = await ContactInfo.findOne();
        if (!contactInfo) {
            return res.status(404).json({ message: "Contact Info not found!" });
        }
        return res.status(200).json(contactInfo);
    } catch (error) {
        next(error);
    }
}

export const updateContactInfo = async (req, res, next) => {
    const contactInfo = await ContactInfo.findById(req.params.id);

    if (!contactInfo) {
        return next(errorHandler(404, "Contact Info not found!"));
    }

    try {
        const updateContactInfo = await ContactInfo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json(updateContactInfo);
    } catch (error) {
        next(error);
    }
}