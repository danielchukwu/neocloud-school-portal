import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassScheduleSchema = new mongoose.Schema({
  order: { type: Number, required: true},
  title: { type: String, required: true, trim: true, maxLength: 100 },
  description: { type: String, required: true, trim: true, maxLength: 500, default: 'This is the description',},
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  classModuleId: { type: mongoose.Types.ObjectId, ref: 'ClassModule', required: true, maxLength: 50 },
});

const ClassScheduleModel = mongoose.model('ClassSchedule', ClassScheduleSchema);

export default ClassScheduleModel;