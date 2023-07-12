import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassworkSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, max: 100 },
  body: { type: String, required: true, trim: true, max: 1000,},
  deadline: { type: Date, required: true },
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, max: 50 },
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, max: 50 },

}, { timestamps: true });

const ClassworkModel = mongoose.model('Classwork', ClassworkSchema);

export default ClassworkModel;