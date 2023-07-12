import mongoose from "mongoose";

// (){} : ! # _ => ""
const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, max: 50 },
  hodId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
}, { timestamps: true });

const FacultyModel = mongoose.model('Faculty', FacultySchema);

export default FacultyModel;