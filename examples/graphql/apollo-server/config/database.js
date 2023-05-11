import mongoose from "mongoose";

async function connectDb() {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error("MONGO_DB_URI is not defined");
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri)

    console.info('Connected to database');
  } catch (error) {
    console.fatal(error);
    process.exit(1);
  }
}

export default connectDb;
