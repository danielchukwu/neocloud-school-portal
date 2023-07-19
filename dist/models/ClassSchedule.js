"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassScheduleSchema = new mongoose_1.default.Schema({
    order: { type: Number, required: true },
    title: { type: String, required: true, trim: true, max: 100 },
    description: { type: String, required: true, trim: true, max: 500, default: 'This is the description', },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    classModuleId: { type: mongoose_1.default.Types.ObjectId, ref: 'ClassModule', required: true, max: 50 },
});
const ClassScheduleModel = mongoose_1.default.model('ClassSchedule', ClassScheduleSchema);
exports.default = ClassScheduleModel;
