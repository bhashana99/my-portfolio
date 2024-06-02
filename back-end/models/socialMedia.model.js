import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  linkedin: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
  github: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
  x: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
  instagram: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
  medium: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
  stackOverflow: {
    username: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
  },
},{timestamps: true});

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);

export default SocialMedia;
