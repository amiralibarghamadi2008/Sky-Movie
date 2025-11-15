import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema(
  {
    genres: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 20,
      minLength: 3,
      enum: ["action", "comedy", "drama", "horror", "sci-fi", "romance"],
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      maxLength: 20,
      minLength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModels =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default CategoryModels;
