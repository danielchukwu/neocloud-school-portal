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
const models_1 = require("../../models");
const graphql_1 = require("graphql");
const errorHandler_1 = require("../../utils/errorHandler");
const jwt_1 = require("../../jwt");
const scalar_1 = __importDefault(require("../scalar/scalar"));
const mutationResolvers = {
    Date: scalar_1.default,
    Mutation: {
        // # Auth Entry Points
        login: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const authData = yield models_1.User.login(args.email, args.password);
                return authData;
            }
            catch (err) {
                console.log(err);
                const errors = (0, errorHandler_1.handleError)(err);
                return new graphql_1.GraphQLError('An error occurred', { extensions: { errors } });
            }
        }),
        signup: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield models_1.User.create(args);
                const authData = yield models_1.User.login(args.email, args.password);
                return authData;
            }
            catch (err) {
                console.log(err);
                const errors = (0, errorHandler_1.handleError)(err);
                return new graphql_1.GraphQLError('An error occurred', { extensions: { errors } });
            }
        }),
        refreshToken: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const payload = (0, jwt_1.decodeToken)(args.refreshToken);
                console.log(payload);
                if (payload) {
                    const user = yield models_1.User.findById(payload.sub);
                    const { access_token, refresh_token } = yield (0, jwt_1.createAccessAndRefreshToken)(user);
                    return { access_token, refresh_token, user };
                }
            }
            catch (err) {
                console.log(err);
                const errors = (0, errorHandler_1.handleError)(err);
                return new graphql_1.GraphQLError('An error occurred', { extensions: { errors } });
            }
        }),
        // # Attendance
        createAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const attendance = new models_1.Attendance(args.attendance);
            return attendance.save();
        }),
        updateAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const attendance = yield models_1.Attendance.findByIdAndUpdate(args._id, args.attendance);
            return yield (attendance === null || attendance === void 0 ? void 0 : attendance.save());
        }),
        deleteAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.Attendance.findByIdAndDelete(args._id);
            return yield models_1.Attendance.find({});
        }),
        // Class
        createClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = new models_1.Class(args.class);
            return class_.save();
        }),
        updateClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = yield models_1.Class.findByIdAndUpdate(args._id, args.class);
            return yield (class_ === null || class_ === void 0 ? void 0 : class_.save());
        }),
        deleteClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.Class.findByIdAndDelete(args._id);
            return yield models_1.Class.find({});
        }),
        // ClassInstance
        createClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = new models_1.ClassInstance(args.classInstance);
            return classInstance.save();
        }),
        updateClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = yield models_1.ClassInstance.findByIdAndUpdate(args._id, args.classInstance);
            return yield (classInstance === null || classInstance === void 0 ? void 0 : classInstance.save());
        }),
        deleteClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.ClassInstance.findByIdAndDelete(args._id);
            return yield models_1.ClassInstance.find({});
        }),
        // ClassModule
        createClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = new models_1.ClassModule(args.classModule);
            return classModule.save();
        }),
        updateClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = yield models_1.ClassModule.findByIdAndUpdate(args._id, args.classModule);
            return yield (classModule === null || classModule === void 0 ? void 0 : classModule.save());
        }),
        deleteClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.ClassModule.findByIdAndDelete(args._id);
            return yield models_1.ClassModule.find({});
        }),
        // ClassSchedule
        createClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = new models_1.ClassSchedule(args.classSchedule);
            return classSchedule.save();
        }),
        updateClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = yield models_1.ClassSchedule.findByIdAndUpdate(args._id, args.classSchedule);
            return yield (classSchedule === null || classSchedule === void 0 ? void 0 : classSchedule.save());
        }),
        deleteClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.ClassSchedule.findByIdAndDelete(args._id);
            return yield models_1.ClassSchedule.find({});
        }),
        // Classwork
        createClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = new models_1.Classwork(args.classwork);
            return classwork.save();
        }),
        updateClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = yield models_1.Classwork.findByIdAndUpdate(args._id, args.classwork);
            return yield (classwork === null || classwork === void 0 ? void 0 : classwork.save());
        }),
        deleteClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.Classwork.findByIdAndDelete(args._id);
            return yield models_1.Classwork.find({});
        }),
        // Faculty
        createFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = new models_1.Faculty(args.faculty);
            return faculty.save();
        }),
        updateFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = yield models_1.Faculty.findByIdAndUpdate(args._id, args.faculty);
            return yield (faculty === null || faculty === void 0 ? void 0 : faculty.save());
        }),
        deleteFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.Faculty.findByIdAndDelete(args._id);
            return yield models_1.Faculty.find({});
        }),
        // Notification
        createNotification: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notification = new models_1.Notification(args.notification);
            return notification.save();
        }),
        // NotificationType
        createNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = new models_1.NotificationType(args.notificationType);
            return notificationType.save();
        }),
        updateNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = yield models_1.NotificationType.findByIdAndUpdate(args._id, args.notificationType);
            return yield (notificationType === null || notificationType === void 0 ? void 0 : notificationType.save());
        }),
        deleteNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.NotificationType.findByIdAndDelete(args._id);
            return yield models_1.NotificationType.find({});
        }),
        // Role
        createRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = new models_1.Role(args.role);
            return role.save();
        }),
        updateRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield models_1.Role.findByIdAndUpdate(args._id, args.role);
            return yield (role === null || role === void 0 ? void 0 : role.save());
        }),
        deleteRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.Role.findByIdAndDelete(args._id);
            return yield models_1.Role.find({});
        }),
        // User
        createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = new models_1.User(args.user);
            return user.save();
        }),
        updateUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield models_1.User.findByIdAndUpdate(args._id, args.user);
            return yield (user === null || user === void 0 ? void 0 : user.save());
        }),
        deleteUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.User.findByIdAndDelete(args._id);
            return yield models_1.User.find({});
        }),
        // UsersClasses
        createUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClassesRoles = new models_1.UsersClassesRoles(args.usersClassesRoles);
            return usersClassesRoles.save();
        }),
        updateUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClassesRoles = yield models_1.UsersClassesRoles.findByIdAndUpdate(args._id, args.usersClassesRoles);
            return yield (usersClassesRoles === null || usersClassesRoles === void 0 ? void 0 : usersClassesRoles.save());
        }),
        deleteUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.UsersClassesRoles.findByIdAndDelete(args._id);
            return yield models_1.UsersClassesRoles.find({});
        }),
        // UsersFaculties
        createUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFacultiesRoles = new models_1.UsersFacultiesRoles(args.usersFacultiesRoles);
            return usersFacultiesRoles.save();
        }),
        updateUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFacultiesRoles = yield models_1.UsersFacultiesRoles.findByIdAndUpdate(args._id, args.usersFacultiesRoles);
            return yield (usersFacultiesRoles === null || usersFacultiesRoles === void 0 ? void 0 : usersFacultiesRoles.save());
        }),
        deleteUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.UsersFacultiesRoles.findByIdAndDelete(args._id);
            return yield models_1.UsersFacultiesRoles.find({});
        }),
        // UsersRoles
        createUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = new models_1.UsersRoles(args.usersRoles);
            return usersRoles.save();
        }),
        updateUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = yield models_1.UsersRoles.findByIdAndUpdate(args._id, args.usersRoles);
            return yield (usersRoles === null || usersRoles === void 0 ? void 0 : usersRoles.save());
        }),
        deleteUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.UsersRoles.findByIdAndDelete(args._id);
            return yield models_1.UsersRoles.find({});
        }),
    }
};
exports.default = mutationResolvers;
