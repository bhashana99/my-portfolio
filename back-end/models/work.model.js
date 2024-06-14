import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Job Title"
  },
  employmentType: {
    type: String,
    required: true,
    default: "Full-time"
  },
  companyName: {
    type: String,
    required: true,
    default: "Company Name"
  },
  companyLocation: {
    type: String,
    required: true,
    default: "Company Location"
  },
  locationType: {
    type: String,
    required: true,
    default: "On-site"
  },
  currentlyWorking: {
    type: Boolean,
    default: false
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: null
  },
  description: {
    type: String,
    default: "Job description and key responsibilities."
  }
}, { timestamps: true });

const Work = mongoose.model("Work", workSchema);

export default Work;
