interface UserTypes {
  _id: mongoose.Types.ObjectId | string;
  username: string;
  email: string;
  password: string;
  bio: string;
  avatar: {
    public_id: string | null;
    url: string | null;
  };
  posts: (mongoose.Types.ObjectId | string)[];
  likedPosts: (mongoose.Types.ObjectId | string)[];
  stories: (mongoose.Types.ObjectId | string)[];
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}
