import mongoose from "mongoose";

const contactInfoSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    
    },
    email:{
        type:String,
        required:true
    },
    whatsapp:{
        type:String,
        
    }
},{timestamps:true});

const ContactInfo = mongoose.model("ContactInfo",contactInfoSchema);

export default ContactInfo;