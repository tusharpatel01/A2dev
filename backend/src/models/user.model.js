import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true, 
      match: [/.+\@.+\..+/, "Please enter a valid email"], 
    },
    contact: {
      type: String, 
      required: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"], 
    },
    institutionName: {
      type: String,
      required: true,
      trim: true,
    },
    requirements: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const User = mongoose.model("User", userSchema);
