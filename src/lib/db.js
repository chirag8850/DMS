import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "document",
    });

    console.log("DB COnnected....");
  } catch (error) {
    console.log("Error connecting Db", error);
  }
};
