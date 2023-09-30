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
exports.get_user_role = exports.get_users_roles = exports.get_user_faculty_role = exports.get_users_faculties_roles = exports.get_user_class_role = exports.get_users_classes_roles = exports.get_user = exports.get_users = exports.get_role = exports.get_roles = exports.get_notification_type = exports.get_notification_types = exports.get_notification = exports.get_notifications = exports.get_faculty = exports.get_faculties = exports.get_classwork = exports.get_classworks = exports.get_class_schedule = exports.get_class_schedules = exports.get_class_module = exports.get_class_modules = exports.get_class_instance_module_schedule = exports.get_class_instances_modules_schedules = exports.get_class_instance = exports.get_class_instances = exports.get_class = exports.get_classes = exports.get_attendance = exports.get_attendances = void 0;
const index_1 = __importDefault(require("../../models/index"));
const smLimit = 5;
const mLimit = 10;
const lLimit = 15;
const xlLimit = 20;
const xxlLimit = 25;
const xxxlLimit = 30;
// Attendance
const get_attendances = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Attendance.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_attendances = get_attendances;
const get_attendance = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Attendance.findById(args._id);
});
exports.get_attendance = get_attendance;
// Classes
const get_classes = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Class.find(args.name ? { name: new RegExp(args.name, 'i') } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_classes = get_classes;
const get_class = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Class.findById(args._id);
});
exports.get_class = get_class;
// ClassInstance
const get_class_instances = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassInstance.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_class_instances = get_class_instances;
const get_class_instance = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassInstance.findById(args._id);
});
exports.get_class_instance = get_class_instance;
// ClassInstancesModulesSchedules
const get_class_instances_modules_schedules = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassInstancesModulesSchedules.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_class_instances_modules_schedules = get_class_instances_modules_schedules;
const get_class_instance_module_schedule = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassInstancesModulesSchedules.findById(args._id);
});
exports.get_class_instance_module_schedule = get_class_instance_module_schedule;
// ClassModule
const get_class_modules = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassModule.find(args.classId ? { classId: args.classId } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_class_modules = get_class_modules;
const get_class_module = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassModule.findById(args._id);
});
exports.get_class_module = get_class_module;
// ClassSchedule
const get_class_schedules = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassSchedule.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_class_schedules = get_class_schedules;
const get_class_schedule = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.ClassSchedule.findById(args._id);
});
exports.get_class_schedule = get_class_schedule;
// Classwork
const get_classworks = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Classwork.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_classworks = get_classworks;
const get_classwork = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Classwork.findById(args._id);
});
exports.get_classwork = get_classwork;
// Faculty
const get_faculties = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Faculty.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_faculties = get_faculties;
const get_faculty = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Faculty.findById(args._id);
});
exports.get_faculty = get_faculty;
// Notification
const get_notifications = (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    // fetch users notifications
    const dataList = yield index_1.default.Notification.find({ ownerId: context.user.sub }).skip(args.page - 1).limit(10).sort({ seen: 1, createdAt: -1 });
    // update all unseen notifications to seen
    yield index_1.default.Notification.updateMany({ ownerId: context.user.sub, seen: false }, { seen: true });
    return dataList;
});
exports.get_notifications = get_notifications;
const get_notification = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Notification.findById(args._id);
});
exports.get_notification = get_notification;
// NotificationType
const get_notification_types = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.NotificationType.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_notification_types = get_notification_types;
const get_notification_type = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.NotificationType.findById(args._id);
});
exports.get_notification_type = get_notification_type;
// Role
const get_roles = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Role.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_roles = get_roles;
const get_role = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.Role.findById(args._id);
});
exports.get_role = get_role;
// User
const get_users = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.User.find(args.name ? { name: new RegExp(args.name, 'i') } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_users = get_users;
const get_user = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.User.findById(args._id);
});
exports.get_user = get_user;
// UsersClassesRoles
const get_users_classes_roles = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersClassesRoles.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
});
exports.get_users_classes_roles = get_users_classes_roles;
const get_user_class_role = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersClassesRoles.findById(args._id);
});
exports.get_user_class_role = get_user_class_role;
// UsersFacultiesRoles
const get_users_faculties_roles = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersFacultiesRoles.find({}).skip(args.page - 1).limit(10);
});
exports.get_users_faculties_roles = get_users_faculties_roles;
const get_user_faculty_role = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersFacultiesRoles.findById(args._id);
});
exports.get_user_faculty_role = get_user_faculty_role;
// UsersRoles
const get_users_roles = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersRoles.find({}).skip(args.page - 1).limit(10);
});
exports.get_users_roles = get_users_roles;
const get_user_role = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.default.UsersRoles.findById(args._id);
});
exports.get_user_role = get_user_role;
