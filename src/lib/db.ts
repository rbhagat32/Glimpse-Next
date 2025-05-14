import mongoose from "mongoose";
import chalk from "chalk";

interface CachedConnectionTypes {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongooseCache: CachedConnectionTypes | undefined; // eslint-disable-line no-var
}

const cached: CachedConnectionTypes = global.mongooseCache ?? { conn: null, promise: null };

export const connectDB = async (): Promise<mongoose.Connection> => {
  if (cached.conn) {
    console.log(chalk.bold.blue("Using Existing Database Connection !"));
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(chalk.bold.red("MONGODB_URI is not defined !"));
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached;

  console.log(chalk.bold.blue("New Database Connection Established !"));
  return cached.conn;
};
