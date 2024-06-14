import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
    default: "Sample University"
  },
  degreeName: {
    type: String,
    required: true,
    default: "Bachelor of Science"
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  gpa: {
    type: Number,
    default: 4.0
  },
  description: {
    type: String,
    default: "Description of the degree program and key achievements."
  }
}, { timestamps: true });

const Education = mongoose.model("Education", educationSchema);

export default Education;
