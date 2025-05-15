interface UserTypes {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  bio: string;
  avatar: {
    public_id: string | null;
    url: string | null;
  };
  posts: mongoose.Types.ObjectId[];
  likedPosts: mongoose.Types.ObjectId[];
  stories: mongoose.Types.ObjectId[];
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}
