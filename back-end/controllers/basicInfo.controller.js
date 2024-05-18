import BasicInfo from "../models/basicInfo.model.js";

export const createBasicInfo = async (req, res, next) => {
  try {
    const basicInfo = await BasicInfo.create(req.body);
    return res.status(201).json(basicInfo);
  } catch (error) {
    next(error);
  }
};

export const updateBasicInfo = async (req, res, next) => {
  const basicInfo = await BasicInfo.findById(req.params.id);

  if (!basicInfo) {
    return next(errorHandler(404, "Basic Info not found!"));
  }

  try {
    const updateBasicInfo = await BasicInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(updateBasicInfo);
  } catch (error) {
    next(error);
  }
};

export const getBasicInfo = async (req, res, next) => {
  try {
    const basicInfo = await BasicInfo.findOne();
    if (!basicInfo) {
      return res.status(404).json({ message: "Basic Info not found!" });
    }
    return res.status(200).json(basicInfo);
  } catch (error) {
    next(error);
  }
};
