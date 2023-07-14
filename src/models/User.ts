import mongoose from "mongoose";

// (){} : ! # _ => ""
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, max: 50 },
  email: { type: String, required: true, trim: true, max: 50, unique: true },
  avatar: { type: String, trim: true, max: 200 },
  cover: { type: String, trim: true, max: 200 },
  bio: { type: String, required: true, trim: true, max: 500, default: 'Ready to connect'},
  phone: { type: String, required: false, trim: true, max: 25, min: 11 },
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, trim: true, max: 50 },
  password: { type: String, required: true, trim: true, max: 50, min: 6 },
  rating: { type: Number, required: true, max: 100, min: 0, default: 0},
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;