import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema(
  {
    name: { type: String },
    date: { type: Date },
    city: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "https://placehold.co/300x300" },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN", "PREM"],
      index: true,
    },
  },
  { timestamps: true }
);

const User = model(collection, schema);

export default User;
