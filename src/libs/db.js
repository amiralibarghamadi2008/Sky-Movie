import mongoose from "mongoose";

export default async function ConnectToDB() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose
        .connect(`${process.env.MongoDB}`, {
          bufferCommands: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 5000,
        })
        .then(() => console.log("Connected ✅"))
        .catch(console.log("Not Connected ❌"));
    }
  } catch (err) {
    console.error("Database connection failed ❌:", err.message);
    throw new Error("خطا در برقرای ارتباط با پایگاه داده");
  }
}
