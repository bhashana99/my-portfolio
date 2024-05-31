import Work from "../models/work.model.js";

export const createWork = async (req, res, next) => {
  try {
    const work = await Work.create(req.body);
    return res.status(201).json(work);
  } catch (error) {
    next(error);
  }
}