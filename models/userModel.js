import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  myList: Array,
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
