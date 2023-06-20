import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
    token: { type: String },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;