import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationSchema = new mongoose.Schema({
  body: { type: String, required: true, trim: true, max: 200 },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', max: 50 }, // Can be null
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', max: 50 }, // Can be null
  notificationTypeId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, max: 50 },
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', NotificationSchema);

export default NotificationModel;