import mongoose from "mongoose";

const basicInfoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      default: "John"
    },
    lastName: {
      type: String,
      required: true,
      default: "Doe"
    },
    brandName: {
      type: String,
      required: true,
      default: "JohnDoe Inc."
    },
    additionalName: {
      type: String,
      default: "JD"
    },
    headline: {
      type: String,
      required: true,
      default: "Software Engineer"
    },
    about: {
      type: String,
      required: true,
      default: "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success."
    },
    cvUrl: {
      type: String,
      default: "https://example.com/johndoe_cv.pdf"
    },
    country: {
      type: String,
      required: true,
      default: "USA"
    },
    city: {
      type: String,
      required: true,
      default: "New York"
    },
    profileImage: {
      type: String,
      default: "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
    },
    skills: {
      type: String,
      default: "JavaScript, Node.js, React, MongoDB"
    }
  },
  { timestamps: true }
);

const BasicInfo = mongoose.model("BasicInfo", basicInfoSchema);

export default BasicInfo;
