import mongoose from "mongoose";

// (){} : ! # _ => ""
const UsersClassesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, trim: true, max: 50 },
});

const UsersClassesModel = mongoose.model('UsersClasses', UsersClassesSchema);

export default UsersClassesModel;