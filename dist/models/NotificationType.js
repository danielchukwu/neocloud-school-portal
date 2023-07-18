"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const NotificationTypeSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, enum: ['Announcement', 'Classwork'], trim: true, max: 100 },
});
const NotificationTypeModel = mongoose_1.default.model('NotificationType', NotificationTypeSchema);
exports.default = NotificationTypeModel;
