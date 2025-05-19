interface PostTypes {
  _id: mongoose.Types.ObjectId | string;
  owner: mongoose.Types.ObjectId | string;
  caption?: string;
  media: {
    public_id: string;
    url: string;
  };
  likes: (mongoose.Types.ObjectId | string)[];
  comments: {
    user: mongoose.Types.ObjectId | string;
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
