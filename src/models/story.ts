import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    media: { public_id: { type: String, required: true }, url: { type: String, required: true } },

    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    expiresAt: { type: Date, default: () => Date.now() + 1000 * 60 * 60 * 24 },
  },
  {
    timestamps: true,
  }
);

storySchema.methods.isExpired = function () {
  return this.expiresAt <= new Date();
};

const StoryModel = mongoose.models.Story || mongoose.model("Story", storySchema);
export { StoryModel };
