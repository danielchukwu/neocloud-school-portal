import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationSchema = new mongoose.Schema({
  body: { type: String, required: true, trim: true, maxLength: 200 },
  notificationTypeId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', maxLength: 50 }, // can be null
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', maxLength: 50 }, // can be null
  classInstanceId: { type: mongoose.Types.ObjectId, ref: 'ClassInstance', maxLength: 50 }, // can be null
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', maxLength: 50 }, // can be null
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', NotificationSchema);

export default NotificationModel;