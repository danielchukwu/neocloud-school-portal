import mongoose from "mongoose";

// (){} : ! # _ => ""
const UsersFacultiesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
  facultiesId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, trim: true, max: 50 },
});

const UsersFacultiesModel = mongoose.model('UsersFaculties', UsersFacultiesSchema);

export default UsersFacultiesModel;