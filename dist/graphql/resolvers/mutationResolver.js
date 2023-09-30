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
const index_1 = __importDefault(require("../../models/index"));
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
                const authData = yield index_1.default.User.login(args.email, args.password);
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
                yield index_1.default.User.create(args);
                const authData = yield index_1.default.User.login(args.email, args.password);
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
                    const user = yield index_1.default.User.findById(payload.sub);
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
            const attendance = new index_1.default.Attendance(args.attendance);
            return attendance.save();
        }),
        updateAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const attendance = yield index_1.default.Attendance.findByIdAndUpdate(args._id, args.attendance);
            return yield (attendance === null || attendance === void 0 ? void 0 : attendance.save());
        }),
        deleteAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.Attendance.findByIdAndDelete(args._id);
            return yield index_1.default.Attendance.find({});
        }),
        // Class
        createClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = new index_1.default.Class(args.class);
            return class_.save();
        }),
        updateClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = yield index_1.default.Class.findByIdAndUpdate(args._id, args.class);
            return yield (class_ === null || class_ === void 0 ? void 0 : class_.save());
        }),
        deleteClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.Class.findByIdAndDelete(args._id);
            return yield index_1.default.Class.find({});
        }),
        // ClassInstance
        createClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = new index_1.default.ClassInstance(args.classInstance);
            return classInstance.save();
        }),
        updateClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = yield index_1.default.ClassInstance.findByIdAndUpdate(args._id, args.classInstance);
            return yield (classInstance === null || classInstance === void 0 ? void 0 : classInstance.save());
        }),
        deleteClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.ClassInstance.findByIdAndDelete(args._id);
            return yield index_1.default.ClassInstance.find({});
        }),
        // ClassModule
        createClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = new index_1.default.ClassModule(args.classModule);
            return classModule.save();
        }),
        updateClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = yield index_1.default.ClassModule.findByIdAndUpdate(args._id, args.classModule);
            return yield (classModule === null || classModule === void 0 ? void 0 : classModule.save());
        }),
        deleteClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.ClassModule.findByIdAndDelete(args._id);
            return yield index_1.default.ClassModule.find({});
        }),
        // ClassSchedule
        createClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = new index_1.default.ClassSchedule(args.classSchedule);
            return classSchedule.save();
        }),
        updateClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = yield index_1.default.ClassSchedule.findByIdAndUpdate(args._id, args.classSchedule);
            return yield (classSchedule === null || classSchedule === void 0 ? void 0 : classSchedule.save());
        }),
        deleteClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.ClassSchedule.findByIdAndDelete(args._id);
            return yield index_1.default.ClassSchedule.find({});
        }),
        // Classwork
        createClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = new index_1.default.Classwork(args.classwork);
            return classwork.save();
        }),
        updateClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = yield index_1.default.Classwork.findByIdAndUpdate(args._id, args.classwork);
            return yield (classwork === null || classwork === void 0 ? void 0 : classwork.save());
        }),
        deleteClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.Classwork.findByIdAndDelete(args._id);
            return yield index_1.default.Classwork.find({});
        }),
        // Faculty
        createFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = new index_1.default.Faculty(args.faculty);
            return faculty.save();
        }),
        updateFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = yield index_1.default.Faculty.findByIdAndUpdate(args._id, args.faculty);
            return yield (faculty === null || faculty === void 0 ? void 0 : faculty.save());
        }),
        deleteFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.Faculty.findByIdAndDelete(args._id);
            return yield index_1.default.Faculty.find({});
        }),
        // Notification
        createNotification: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notification = new index_1.default.Notification(args.notification);
            return notification.save();
        }),
        // NotificationType
        createNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = new index_1.default.NotificationType(args.notificationType);
            return notificationType.save();
        }),
        updateNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = yield index_1.default.NotificationType.findByIdAndUpdate(args._id, args.notificationType);
            return yield (notificationType === null || notificationType === void 0 ? void 0 : notificationType.save());
        }),
        deleteNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.NotificationType.findByIdAndDelete(args._id);
            return yield index_1.default.NotificationType.find({});
        }),
        // Role
        createRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = new index_1.default.Role(args.role);
            return role.save();
        }),
        updateRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield index_1.default.Role.findByIdAndUpdate(args._id, args.role);
            return yield (role === null || role === void 0 ? void 0 : role.save());
        }),
        deleteRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.Role.findByIdAndDelete(args._id);
            return yield index_1.default.Role.find({});
        }),
        // User
        createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = new index_1.default.User(args.user);
            return user.save();
        }),
        updateUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield index_1.default.User.findByIdAndUpdate(args._id, args.user);
            return yield (user === null || user === void 0 ? void 0 : user.save());
        }),
        deleteUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.User.findByIdAndDelete(args._id);
            return yield index_1.default.User.find({});
        }),
        // UsersClasses
        createUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClassesRoles = new index_1.default.UsersClassesRoles(args.usersClassesRoles);
            return usersClassesRoles.save();
        }),
        updateUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClassesRoles = yield index_1.default.UsersClassesRoles.findByIdAndUpdate(args._id, args.usersClassesRoles);
            return yield (usersClassesRoles === null || usersClassesRoles === void 0 ? void 0 : usersClassesRoles.save());
        }),
        deleteUsersClassesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.UsersClassesRoles.findByIdAndDelete(args._id);
            return yield index_1.default.UsersClassesRoles.find({});
        }),
        // UsersFaculties
        createUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFacultiesRoles = new index_1.default.UsersFacultiesRoles(args.usersFacultiesRoles);
            return usersFacultiesRoles.save();
        }),
        updateUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFacultiesRoles = yield index_1.default.UsersFacultiesRoles.findByIdAndUpdate(args._id, args.usersFacultiesRoles);
            return yield (usersFacultiesRoles === null || usersFacultiesRoles === void 0 ? void 0 : usersFacultiesRoles.save());
        }),
        deleteUsersFacultiesRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.UsersFacultiesRoles.findByIdAndDelete(args._id);
            return yield index_1.default.UsersFacultiesRoles.find({});
        }),
        // UsersRoles
        createUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = new index_1.default.UsersRoles(args.usersRoles);
            return usersRoles.save();
        }),
        updateUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = yield index_1.default.UsersRoles.findByIdAndUpdate(args._id, args.usersRoles);
            return yield (usersRoles === null || usersRoles === void 0 ? void 0 : usersRoles.save());
        }),
        deleteUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.default.UsersRoles.findByIdAndDelete(args._id);
            return yield index_1.default.UsersRoles.find({});
        }),
    }
};
exports.default = mutationResolvers;
