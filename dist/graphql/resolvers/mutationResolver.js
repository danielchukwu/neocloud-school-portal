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
const Attendance_1 = __importDefault(require("../../models/Attendance"));
const Class_1 = __importDefault(require("../../models/Class"));
const ClassInstance_1 = __importDefault(require("../../models/ClassInstance"));
const ClassModule_1 = __importDefault(require("../../models/ClassModule"));
const ClassSchedule_1 = __importDefault(require("../../models/ClassSchedule"));
const Classwork_1 = __importDefault(require("../../models/Classwork"));
const Faculty_1 = __importDefault(require("../../models/Faculty"));
const Notification_1 = __importDefault(require("../../models/Notification"));
const NotificationType_1 = __importDefault(require("../../models/NotificationType"));
const Role_1 = __importDefault(require("../../models/Role"));
const User_1 = __importDefault(require("../../models/User"));
const UsersClasses_1 = __importDefault(require("../../models/UsersClasses"));
const UsersFaculties_1 = __importDefault(require("../../models/UsersFaculties"));
const UsersRoles_1 = __importDefault(require("../../models/UsersRoles"));
const mutationResolvers = {
    Mutation: {
        // # Attendance
        createAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const attendance = new Attendance_1.default(args.attendance);
            return attendance.save();
        }),
        updateAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const attendance = yield Attendance_1.default.findByIdAndUpdate(args._id, args.attendance);
            return yield (attendance === null || attendance === void 0 ? void 0 : attendance.save());
        }),
        deleteAttendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield Attendance_1.default.findByIdAndDelete(args._id);
            return yield Attendance_1.default.find({});
        }),
        // Class
        createClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = new Class_1.default(args.class);
            return class_.save();
        }),
        updateClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const class_ = yield Class_1.default.findByIdAndUpdate(args._id, args.class);
            return yield (class_ === null || class_ === void 0 ? void 0 : class_.save());
        }),
        deleteClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield Class_1.default.findByIdAndDelete(args._id);
            return yield Class_1.default.find({});
        }),
        // ClassInstance
        createClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = new ClassInstance_1.default(args.classInstance);
            return classInstance.save();
        }),
        updateClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classInstance = yield ClassInstance_1.default.findByIdAndUpdate(args._id, args.classInstance);
            return yield (classInstance === null || classInstance === void 0 ? void 0 : classInstance.save());
        }),
        deleteClassInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield ClassInstance_1.default.findByIdAndDelete(args._id);
            return yield ClassInstance_1.default.find({});
        }),
        // ClassModule
        createClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = new ClassModule_1.default(args.classModule);
            return classModule.save();
        }),
        updateClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classModule = yield ClassModule_1.default.findByIdAndUpdate(args._id, args.classModule);
            return yield (classModule === null || classModule === void 0 ? void 0 : classModule.save());
        }),
        deleteClassModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield ClassModule_1.default.findByIdAndDelete(args._id);
            return yield ClassModule_1.default.find({});
        }),
        // ClassSchedule
        createClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = new ClassSchedule_1.default(args.classSchedule);
            return classSchedule.save();
        }),
        updateClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classSchedule = yield ClassSchedule_1.default.findByIdAndUpdate(args._id, args.classSchedule);
            return yield (classSchedule === null || classSchedule === void 0 ? void 0 : classSchedule.save());
        }),
        deleteClassSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield ClassSchedule_1.default.findByIdAndDelete(args._id);
            return yield ClassSchedule_1.default.find({});
        }),
        // Classwork
        createClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = new Classwork_1.default(args.classwork);
            return classwork.save();
        }),
        updateClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const classwork = yield Classwork_1.default.findByIdAndUpdate(args._id, args.classwork);
            return yield (classwork === null || classwork === void 0 ? void 0 : classwork.save());
        }),
        deleteClasswork: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield Classwork_1.default.findByIdAndDelete(args._id);
            return yield Classwork_1.default.find({});
        }),
        // Faculty
        createFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = new Faculty_1.default(args.faculty);
            return faculty.save();
        }),
        updateFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const faculty = yield Faculty_1.default.findByIdAndUpdate(args._id, args.faculty);
            return yield (faculty === null || faculty === void 0 ? void 0 : faculty.save());
        }),
        deleteFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield Faculty_1.default.findByIdAndDelete(args._id);
            return yield Faculty_1.default.find({});
        }),
        // Notification
        createNotification: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notification = new Notification_1.default(args.notification);
            return notification.save();
        }),
        // NotificationType
        createNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = new NotificationType_1.default(args.notificationType);
            return notificationType.save();
        }),
        updateNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const notificationType = yield NotificationType_1.default.findByIdAndUpdate(args._id, args.notificationType);
            return yield (notificationType === null || notificationType === void 0 ? void 0 : notificationType.save());
        }),
        deleteNotificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield NotificationType_1.default.findByIdAndDelete(args._id);
            return yield NotificationType_1.default.find({});
        }),
        // Role
        createRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = new Role_1.default(args.role);
            return role.save();
        }),
        updateRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.findByIdAndUpdate(args._id, args.role);
            return yield (role === null || role === void 0 ? void 0 : role.save());
        }),
        deleteRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield Role_1.default.findByIdAndDelete(args._id);
            return yield Role_1.default.find({});
        }),
        // User
        createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = new User_1.default(args.user);
            return user.save();
        }),
        updateUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.default.findByIdAndUpdate(args._id, args.user);
            return yield (user === null || user === void 0 ? void 0 : user.save());
        }),
        deleteUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield User_1.default.findByIdAndDelete(args._id);
            return yield User_1.default.find({});
        }),
        // UsersClasses
        createUsersClasses: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClasses = new UsersClasses_1.default(args.usersClasses);
            return usersClasses.save();
        }),
        updateUsersClasses: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersClasses = yield UsersClasses_1.default.findByIdAndUpdate(args._id, args.usersClasses);
            return yield (usersClasses === null || usersClasses === void 0 ? void 0 : usersClasses.save());
        }),
        deleteUsersClasses: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield UsersClasses_1.default.findByIdAndDelete(args._id);
            return yield UsersClasses_1.default.find({});
        }),
        // UsersFaculties
        createUsersFaculties: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFaculties = new UsersFaculties_1.default(args.usersFaculties);
            return usersFaculties.save();
        }),
        updateUsersFaculties: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersFaculties = yield UsersFaculties_1.default.findByIdAndUpdate(args._id, args.usersFaculties);
            return yield (usersFaculties === null || usersFaculties === void 0 ? void 0 : usersFaculties.save());
        }),
        deleteUsersFaculties: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield UsersFaculties_1.default.findByIdAndDelete(args._id);
            return yield UsersFaculties_1.default.find({});
        }),
        // UsersRoles
        createUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = new UsersRoles_1.default(args.usersRoles);
            return usersRoles.save();
        }),
        updateUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const usersRoles = yield UsersRoles_1.default.findByIdAndUpdate(args._id, args.usersRoles);
            return yield (usersRoles === null || usersRoles === void 0 ? void 0 : usersRoles.save());
        }),
        deleteUsersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield UsersRoles_1.default.findByIdAndDelete(args._id);
            return yield UsersRoles_1.default.find({});
        }),
    }
};
exports.default = mutationResolvers;
