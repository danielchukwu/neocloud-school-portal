"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassworkFileSchema = new mongoose_1.default.Schema({
    order: { type: Number, required: true },
    link: { type: String, required: true, max: 200 },
    classworkId: { type: mongoose_1.default.Types.ObjectId, ref: 'Classwork', required: true, max: 50 },
});
const ClassworkFileModel = mongoose_1.default.model('ClassworkFile', ClassworkFileSchema);
exports.default = ClassworkFileModel;
