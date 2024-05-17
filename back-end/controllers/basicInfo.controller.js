import BasicInfo from "../models/basicInfo.model.js";


export const createBasicInfo = async (req, res, next) => {
  try {
    const basicInfo = await BasicInfo.create(req.body);
    return res.status(201).json(basicInfo);
  } catch (error) {
    next(error);
  }
};


