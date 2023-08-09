"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validator_1 = __importDefault(require("validator"));
// (){} : ! # _ => ""
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, 'name field is required'], trim: true, maxLength: [30, 'name must be less than 30 characters'] },
    email: { type: String, required: [true, 'email field is required'], trim: true, maxLength: [50, 'email must be less than 50 characters'], unique: true, validate: [validator_1.default.isEmail, 'enter a valid email'] },
    avatar: { type: String, trim: true, maxLength: [200, 'avatar string must be less than 200 characters'] },
    cover: { type: String, trim: true, maxLength: [200, 'cover string must be less than 50 characters'] },
    bio: { type: String, required: true, trim: true, maxLength: [500, 'bio must be less than 500 characters'], default: 'Ready to connect' },
    phone: { type: String, required: false, trim: true, maxLength: [25, 'phone should be less than 25 characters'], minLength: [10, 'phone number should be more than 9 characters'] },
    password: { type: String, required: [true, 'password field is required'], trim: true, validate: [validator_1.default.isStrongPassword, 'Password must include at least 1 uppercase, 1 lowercase, and 1 special character and should be a minimum of 6 characters'] },
    roleId: { type: mongoose_1.default.Types.ObjectId, ref: 'Role', maxLength: 50 },
}, { timestamps: true });
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt();
        this.password = yield bcrypt_1.default.hash(`${this.password}`, salt);
        next();
    });
});
UserSchema.statics.login = function (email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findOne({ email });
        if (user) {
            const passwordMatches = yield bcrypt_1.default.compare(password, user.password);
            if (passwordMatches)
                return user;
            throw new Error('incorrect password');
        }
        throw new Error('email does not exist');
    });
};
const userModel = mongoose_1.default.model('User', UserSchema);
exports.default = userModel;
