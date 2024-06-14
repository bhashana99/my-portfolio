import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Sample Certificate"
    },
    issuingOrganization: {
        type: String,
        required: true,
        default: "Organization Name"
    },
    issueDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    credentialId: {
        type: String,
        default: "123456"
    },
    credentialUrl: {
        type: String,
        default: "https://example.com/certificate"
    }
}, { timestamps: true });

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
