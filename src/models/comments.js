import mongoose from "mongoose";
import MovieModels from "./movie";

export const CommentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 150,
      minLength: 5,
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModels =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default CommentModels;
