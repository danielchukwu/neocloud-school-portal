import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassModuleSchema = new mongoose.Schema({
  order: { type: Number, required: true},
  title: { type: String, required: true, trim: true, max: 100 },
  ClassId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, trim: true, max: 50 },
}, { timestamps: true });

const ClassModuleModel = mongoose.model('ClassModule', ClassModuleSchema);

export default ClassModuleModel;