import mongoose from "mongoose";
import CommentModels from "./comments";

export const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 30,
      minLength: 5,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 550,
      minLength: 3,
    },
    poster: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    releaseYear: {
      type: Number,
      required: true,
      trim: true,
      min: 1900,
      max: 2030,
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
    duration: {
      type: Number,
      required: true,
      trim: true,
    },
    cast: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
    },
    trailerUrl: {
      type: String,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

MovieSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "movie",
});

const MovieModels =
  mongoose.models.Movie || mongoose.model("Movie", MovieSchema);

export default MovieModels;
