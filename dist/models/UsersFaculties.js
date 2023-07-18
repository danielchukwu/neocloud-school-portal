"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const UsersFacultiesSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
    facultiesId: { type: mongoose_1.default.Types.ObjectId, ref: 'Faculty', required: true, trim: true, max: 50 },
});
const UsersFacultiesModel = mongoose_1.default.model('UsersFaculties', UsersFacultiesSchema);
exports.default = UsersFacultiesModel;
