import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassInstanceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, max: 100 },
  isCompleted: { type: Boolean, required: true, default: false},
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, max: 50 },
}, { timestamps: true });

const ClassInstanceModel = mongoose.model('ClassInstance', ClassInstanceSchema);

export default ClassInstanceModel;