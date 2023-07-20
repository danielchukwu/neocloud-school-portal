import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationSchema = new mongoose.Schema({
  body: { type: String, required: true, trim: true, max: 200 },
  notificationTypeId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, max: 50 },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', max: 50 }, // can be null
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', max: 50 }, // can be null
  classInstanceId: { type: mongoose.Types.ObjectId, ref: 'ClassInstance', max: 50 }, // can be null
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', max: 50 }, // can be null
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', NotificationSchema);

export default NotificationModel;