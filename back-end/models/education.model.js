import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degreeName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  gpa: {
    type: Number,
  },
  description:{
    type:String,
  }
},{timestamps:true});

const Education = mongoose.model("Education", educationSchema);

export default Education;
