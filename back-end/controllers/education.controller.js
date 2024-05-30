import Education from "../models/education.model.js";

export const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);
    return res.status(201).json(education);
  } catch (error) {
    next(error);
  }
};

export const getEducations = async (req, res, next) => {
    try {
        const educations = await Education.find();
        if (!educations) {
        return res.status(404).json({ message: "Educations not found!" });
        }
        return res.status(200).json(educations);
    } catch (error) {
        next(error);
    }
}