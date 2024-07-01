import mongoose from "mongoose";

export default async function connectToDb() {
  if (mongoose.connection.readyState) {
    console.log("already connected to db");
    return;
  }
  try {
    const url =
      "mongodb+srv://sakethayinavolu:9tK3wy8L4XPrdP7z@cluster0.or4zlgp.mongodb.net/nextjs";
    await mongoose.connect(url);
    console.log("connected to database");
  } catch (e) {
    console.log("error connecting to db", err);
  }
}
