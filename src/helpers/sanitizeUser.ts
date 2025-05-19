/* eslint-disable */
export function sanitizeUser(user: any): UserTypes | null {
  if (!user) return null;

  return {
    _id: user._id.toString?.(),
    username: user.username,
    email: user.email,
    bio: user.bio,
    avatar: {
      public_id: user.avatar?.public_id ?? null,
      url: user.avatar?.url ?? null,
    },
    posts: user.posts?.map((id: string) => id.toString?.() || id) ?? [],
    likedPosts: user.likedPosts?.map((id: string) => id.toString?.() || id) ?? [],
    stories: user.stories?.map((id: string) => id.toString?.() || id) ?? [],
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
