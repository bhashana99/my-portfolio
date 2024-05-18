import SocialMedia from "../models/socialMedia.model.js";

export const createSocialMedia = async (req, res, next) => {
    try {
        const socialMedia = await SocialMedia.create(req.body);
        return res.status(201).json(socialMedia);
    } catch (error) {
        next(error);
    }
}