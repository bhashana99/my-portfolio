import mongoose from "mongoose";

const basicInfoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    additionalName: {
      type: String,
    },
    headline: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    cvUrl: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    },
  },
  { timestamps: true }
);

const BasicInfo = mongoose.model("BasicInfo", basicInfoSchema);

export default BasicInfo;
