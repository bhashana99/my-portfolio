import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  linkedin: {
    username: {
      type: String,
      default: "linkedin_user"
    },
    link: {
      type: String,
      default: "https://linkedin.com/in/linkedin_user"
    },
  },
  github: {
    username: {
      type: String,
      default: "github_user"
    },
    link: {
      type: String,
      default: "https://github.com/github_user"
    },
  },
  x: {
    username: {
      type: String,
      default: "x_user"
    },
    link: {
      type: String,
      default: "https://x.com/x_user"
    },
  },
  instagram: {
    username: {
      type: String,
      default: "instagram_user"
    },
    link: {
      type: String,
      default: "https://instagram.com/instagram_user"
    },
  },
  medium: {
    username: {
      type: String,
      default: "medium_user"
    },
    link: {
      type: String,
      default: "https://medium.com/@medium_user"
    },
  },
  stackOverflow: {
    username: {
      type: String,
      default: "stackoverflow_user"
    },
    link: {
      type: String,
      default: "https://stackoverflow.com/users/stackoverflow_user"
    },
  },
}, { timestamps: true });

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);

export default SocialMedia;
