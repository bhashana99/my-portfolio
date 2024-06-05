import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    
    },
    projectDescription:{
        type:String,
       
    },
    repoUrl:{
        type:String,
        
    },
    siteUrl:{
        type:String,  
    },
},{timestamps:true});

const Project = mongoose.model("Project",projectSchema);

export default Project;