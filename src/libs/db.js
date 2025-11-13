import mongoose from "mongoose";

export default async function ConnectToDB() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose
        .connect(`${process.env.MongoDB}`)
        .then(() => console.log("Connected ✅"))
        .catch(console.log("Not Connected ❌"));
    }
  } catch (err) {
    console.log(err);
  }
}
