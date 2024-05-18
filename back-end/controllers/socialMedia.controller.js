import SocialMedia from "../models/socialMedia.model.js";

export const createSocialMedia = async (req, res, next) => {
  try {
    const socialMedia = await SocialMedia.create(req.body);
    return res.status(201).json(socialMedia);
  } catch (error) {
    next(error);
  }
};

export const getSocialMedia = async (req, res, next) => {
  try {
    const socialMedia = await SocialMedia.findOne();
    if (!socialMedia) {
      return res
        .status(404)
        .json({ message: "Social Media Details not found!" });
    }
    return res.status(200).json(socialMedia);
  } catch (error) {
    next(error);
  }
};
