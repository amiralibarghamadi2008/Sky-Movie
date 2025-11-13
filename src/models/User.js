import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 20,
      minLength: 3,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    PhonNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      match: /^09[0-9]{9}$/,
    },
    Password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 20,
      minLength: 8,
    },
    identifier: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^09[0-9]{9}$/;
          return emailRegex.test(value) || phoneRegex.test(value);
        },
        message: "لطفاً یک ایمیل یا شماره تلفن معتبر وارد کنید",
      },
    },
  },
  {
    timeseries: true,
  }
);

const UserModels =
  mongoose.models.UserModel || mongoose.model("UserModel", UserSchema);

export default UserModels;
