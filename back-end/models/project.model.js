import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    
    },
    projectDescription:{
        type:String,
       
    },
    imageUrls:{
        type:Array,
        required:true
    },
},{timestamps:true});

const Project = mongoose.model("Project",projectSchema);

export default Project;