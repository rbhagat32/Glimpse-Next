import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    caption: { type: String },
    media: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },

    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const PostModel = mongoose.models.Post || mongoose.model("Post", postSchema);
export { PostModel };
