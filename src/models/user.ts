import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },

    bio: { type: String },
    avatar: {
      public_id: { type: String },
      url: { type: String },
    },

    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }

//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// userSchema.methods.matchPassword = async function (enteredPassword: string) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export { UserModel };
