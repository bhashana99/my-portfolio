import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        default: "Sample Project"
    },
    projectDescription: {
        type: String,
        default: "This is a sample project description."
    },
    repoUrl: {
        type: String,
        default: "https://github.com/sample/sample-repo"
    },
    siteUrl: {
        type: String,
        default: "https://sampleproject.com"
    },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
