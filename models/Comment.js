import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("model", CommentSchema);

export default model;
