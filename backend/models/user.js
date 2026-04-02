import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  supabaseUserId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);