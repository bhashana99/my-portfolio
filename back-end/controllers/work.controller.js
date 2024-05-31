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


export const deleteWork = async (req, res, next) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: "Work not found!" });
    }

    await Work.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Work deleted!" });
  } catch (error) {
    next(error);
  }
}

export const getWork = async (req, res, next) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return next(errorHandler(404, "work not found"));
    }
    return res.status(200).json(work);
  } catch (error) {
    next(error);
  }
}