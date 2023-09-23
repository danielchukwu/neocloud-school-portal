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
exports.createAccessAndRefreshToken = exports.decodeToken = exports.createJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const graphql_1 = require("graphql");
const Role_1 = __importDefault(require("../models/Role"));
const errorHandler_1 = require("../utils/errorHandler");
const createJWT = (user, expiresIn) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const role = yield Role_1.default.findById(user.roleId);
    return jsonwebtoken_1.default.sign({ role: (_a = role === null || role === void 0 ? void 0 : role.name) !== null && _a !== void 0 ? _a : '' }, `${process.env.SECRET_KEY}`, { algorithm: 'HS256', subject: `${user._id}`, expiresIn: expiresIn });
});
exports.createJWT = createJWT;
const decodeToken = (token) => {
    try {
        const user = jsonwebtoken_1.default.verify(token, `${process.env.SECRET_KEY}`);
        return user;
    }
    catch (err) {
        let errors = (0, errorHandler_1.handleError)(err);
        throw new graphql_1.GraphQLError(err.message, { extensions: { errors } });
    }
};
exports.decodeToken = decodeToken;
const createAccessAndRefreshToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const access_token = yield (0, exports.createJWT)(user, '1h'); // 1h
    const refresh_token = yield (0, exports.createJWT)(user, '360d');
    return { access_token, refresh_token };
});
exports.createAccessAndRefreshToken = createAccessAndRefreshToken;
