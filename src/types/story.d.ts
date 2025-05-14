interface StoryTypes {
  _id: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  media: {
    public_id: string;
    url: string;
  };
  seenBy: mongoose.Types.ObjectId[];
  expiresAt: Date;
  isExpired: () => boolean;
  createdAt: Date;
  updatedAt: Date;
}
