import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassworkFileSchema = new mongoose.Schema({
  order: { type: Number, required: true},
  link: { type: String, required: true, max: 200 },
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', required: true, max: 50 },
});

const ClassworkFileModel = mongoose.model('ClassworkFile', ClassworkFileSchema);

export default ClassworkFileModel;