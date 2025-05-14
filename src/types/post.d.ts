interface PostTypes {
  _id: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  caption?: string;
  media: {
    public_id: string;
    url: string;
  };
  likes: mongoose.Types.ObjectId[];
  comments: {
    user: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
