"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true, max: 50 },
    email: { type: String, required: true, trim: true, max: 50, unique: true },
    avatar: { type: String, trim: true, max: 200 },
    cover: { type: String, trim: true, max: 200 },
    bio: { type: String, required: true, trim: true, max: 500, default: 'Ready to connect' },
    phone: { type: String, required: false, trim: true, max: 25, min: 11 },
    password: { type: String, required: true, trim: true, max: 50, min: 6 },
    rating: { type: Number, required: true, max: 100, min: 0, default: 0 },
    roleId: { type: mongoose_1.default.Types.ObjectId, ref: 'Role', max: 50 },
}, { timestamps: true });
const UserModel = mongoose_1.default.model('User', UserSchema);
exports.default = UserModel;
