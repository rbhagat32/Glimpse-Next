interface StoryTypes {
  _id: mongoose.Types.ObjectId | string;
  owner: mongoose.Types.ObjectId | string;
  media: {
    public_id: string;
    url: string;
  };
  seenBy: (mongoose.Types.ObjectId | string)[];
  likedBy: (mongoose.Types.ObjectId | string)[];
  expiresAt: Date;
  isExpired: () => boolean;
  createdAt: Date;
  updatedAt: Date;
}
