import mongoose from "mongoose";

const contactInfoSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        default: "+1234567890"
    },
    email: {
        type: String,
        required: true,
        default: "example@example.com"
    },
    whatsapp: {
        type: String,
        default: "+1234567890"
    }
}, { timestamps: true });

const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);

export default ContactInfo;
