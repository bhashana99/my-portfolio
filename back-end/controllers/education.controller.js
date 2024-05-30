import Education from "../models/education.model.js";

export const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);
    return res.status(201).json(education);
  } catch (error) {
    next(error);
  }
};
