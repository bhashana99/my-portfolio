import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  employmentType: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  companyLocation: {
    type: String,
    require: true,
  },
  locationType: {
    type: String,
    require: true,
  },
  currentlyWorking: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
  },
  description:{
    type:String,
  
  }
},{timestamps:true});

const Work = mongoose.model("Work", workSchema);

export default Work;
