import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationTypeSchema = new mongoose.Schema({
  title: { type: String, required: true, enum: ['Announcement', 'Classwork'], trim: true, max: 100 },
});

const NotificationTypeModel = mongoose.model('NotificationType', NotificationTypeSchema);

export default NotificationTypeModel;