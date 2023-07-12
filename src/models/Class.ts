import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, max: 100 },
  description: { type: String, required: true, trim: true, max: 500, default: 'This is the description',},
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, trim: true, max: 50 },
}, { timestamps: true });

const ClassModel = mongoose.model('Class', ClassSchema);

export default ClassModel;