import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    description:{
        type:String,
       
    },
    imageUrls:{
        type:Array,
        required:true
    },
},{timestamps:true});

const Project = mongoose.model("Project",projectSchema);

export default Project;