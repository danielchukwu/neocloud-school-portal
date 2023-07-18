"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const UsersClassesSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
    classId: { type: mongoose_1.default.Types.ObjectId, ref: 'Class', required: true, trim: true, max: 50 },
});
const UsersClassesModel = mongoose_1.default.model('UsersClasses', UsersClassesSchema);
exports.default = UsersClassesModel;
