import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    issuingOrganization:{
        type:String,
        required:true
    },
    issueDate:{
        type:Date,
        required:true
    },
    
    credentialId:{
        type:String
    },
    credentialUrl:{
        type:String
    
    }
},{timestamps:true});

const Certificate = mongoose.model("Certificate",certificateSchema);

export default Certificate;