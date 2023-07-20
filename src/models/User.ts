import mongoose from "mongoose";

// (){} : ! # _ => ""
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, max: 50 },
  email: { type: String, required: true, trim: true, max: 50, unique: true },
  avatar: { type: String, trim: true, max: 200 },
  cover: { type: String, trim: true, max: 200 },
  bio: { type: String, required: true, trim: true, max: 500, default: 'Ready to connect'},
  phone: { type: String, required: false, trim: true, max: 25, min: 11 },
  password: { type: String, required: true, trim: true, max: 50, min: 6 },
  roleId: { type: mongoose.Types.ObjectId, ref: 'Role', max: 50 },
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;