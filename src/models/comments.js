import mongoose from "mongoose";
import MovieModels from "./movie";

export const CommentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      trim: true,
      maxLength: 150,
      minLength: 5,
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModels =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default CommentModels;
