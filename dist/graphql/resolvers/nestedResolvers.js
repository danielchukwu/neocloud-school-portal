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
const Class_1 = __importDefault(require("../../models/Class"));
const ClassModule_1 = __importDefault(require("../../models/ClassModule"));
const ClassSchedule_1 = __importDefault(require("../../models/ClassSchedule"));
const Classwork_1 = __importDefault(require("../../models/Classwork"));
const Faculty_1 = __importDefault(require("../../models/Faculty"));
const NotificationType_1 = __importDefault(require("../../models/NotificationType"));
const Role_1 = __importDefault(require("../../models/Role"));
const User_1 = __importDefault(require("../../models/User"));
const UsersClassesRoles_1 = __importDefault(require("../../models/UsersClassesRoles"));
const UsersFacultiesRoles_1 = __importDefault(require("../../models/UsersFacultiesRoles"));
const ClassInstance_1 = __importDefault(require("../../models/ClassInstance"));
const nestedResolvers = {
    Attendance: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        classSchedule: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassSchedule_1.default.findById(parent.classScheduleId); }),
    },
    Class: {
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
        educators: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.findOne({ name: 'Educator' });
            const usersClassRolesList = yield UsersClassesRoles_1.default.find({ roleId: role === null || role === void 0 ? void 0 : role._id, classId: parent._id });
            const educators = [];
            yield Promise.all(usersClassRolesList.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                educators.push(yield User_1.default.findById(item.userId));
            })));
            return educators;
        }),
    },
    ClassInstance: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        educator: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.educatorId); }),
    },
    ClassModule: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        classSchedules: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassSchedule_1.default.findById({ classModuleId: parent.id }); }),
    },
    ClassSchedule: {
        classModule: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassModule_1.default.findById(parent.classModuleId); }),
    },
    Classwork: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
        classSchedule: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassSchedule_1.default.findById(parent.classScheduleId); }),
    },
    Faculty: {
        hod: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.hodId); }),
        classes: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.find({ facultyId: parent._id }); }),
        educators: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.findOne({ name: 'Educator' });
            const usersFacultiesRolesList = yield UsersFacultiesRoles_1.default.find({ roleId: role === null || role === void 0 ? void 0 : role._id, facultyId: parent._id });
            const educators = [];
            yield Promise.all(usersFacultiesRolesList.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                educators.push(yield User_1.default.findById(item.userId));
            })));
            return educators;
        }),
        students: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            // const role = await Role.find({name: 'Student'});
            // return await User.find({roleId: role[0]._id, facultyId: parent._id});
            const role = yield Role_1.default.findOne({ name: 'Student' });
            const usersFacultiesRolesList = yield UsersFacultiesRoles_1.default.find({ roleId: role === null || role === void 0 ? void 0 : role._id, facultyId: parent._id });
            const students = [];
            yield Promise.all(usersFacultiesRolesList.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                students.push(yield User_1.default.findById(item.userId));
            })));
            return students;
        }),
        classesCount: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.find({ facultyId: parent._id }).count(); }),
        educatorsCount: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.find({ name: 'Educator' });
            return yield User_1.default.find({ roleId: role[0]._id, facultyId: parent._id }).count();
        }),
        studentsCount: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.find({ name: 'Student' });
            return yield User_1.default.find({ roleId: role[0]._id, facultyId: parent._id }).count();
        }),
    },
    Notification: {
        notificationType: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield NotificationType_1.default.findById(parent.notificationTypeId); }),
        classwork: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Classwork_1.default.findById(parent.classworkId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        classInstance: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassInstance_1.default.findById(parent.classInstanceId); }),
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
    },
    User: {
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield UsersFacultiesRoles_1.default.find({ userId: parent._id }); }),
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
    },
    UsersClassesRoles: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
    },
    UsersFacultiesRoles: {
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
    },
    UsersRoles: {
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
    }
};
exports.default = nestedResolvers;
