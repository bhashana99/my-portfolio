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

export const deleteEducation = async (req, res, next) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: "Education not found!" });
        }

        await Education.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Education deleted!" });
    } catch (error) {
        next(error);
    }
}

export const getEducation = async (req, res, next) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return next(errorHandler(404, "education not found"));
        }
        return res.status(200).json(education);
    } catch (error) {
        next(error);
    }
}

export const updateEducation = async (req, res, next) => {
    const education = await Education.findById(req.params.id);
    if (!education) {
        return next(errorHandler(404, "education not found"));
    }

    try {
        const updatedEducation = await Education.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedEducation);
    } catch (error) {
        next(error);
    }
}