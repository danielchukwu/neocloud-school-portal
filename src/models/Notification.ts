import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationSchema = new mongoose.Schema({
  body: { type: String, required: true, trim: true, max: 200 },
  notificationTypeId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', max: 50 },
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', NotificationSchema);

export default NotificationModel;