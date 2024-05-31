import Work from "../models/work.model.js";

export const createWork = async (req, res, next) => {
  try {
    const work = await Work.create(req.body);
    return res.status(201).json(work);
  } catch (error) {
    next(error);
  }
};

export const getWorks = async (req, res, next) => {
  try {
    const works = await Work.find();
    if (!works) {
      return res.status(404).json({ message: "Works not found!" });
    }
    return res.status(200).json(works);
  } catch (error) {
    next(error);
  }
};
