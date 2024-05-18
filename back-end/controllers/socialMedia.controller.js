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

export const updateSocialMedia = async (req,res,next) =>{
    const socialMedia = await SocialMedia.findById(req.params.id);

    if(!socialMedia){
        return next(errorHandler(404, "Social Media Details not found!"));
    }

    try {
        const updateSocialMedia = await SocialMedia.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        return res.status(200).json(updateSocialMedia);
    } catch (error) {
        next(error);
    }
}