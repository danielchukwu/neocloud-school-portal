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
const UsersFaculties_1 = __importDefault(require("../../models/UsersFaculties"));
const nestedResolvers = {
    Attendance: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        classSchedule: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassSchedule_1.default.findById(parent.classScheduleId); }),
    },
    Class: {
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
    },
    ClassInstance: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
    },
    ClassModule: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
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
            const role = yield Role_1.default.find({ name: 'Educator' });
            return yield User_1.default.find({ roleId: role[0]._id, facultyId: parent._id });
        }),
        students: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const role = yield Role_1.default.find({ name: 'Student' });
            return yield User_1.default.find({ roleId: role[0]._id, facultyId: parent._id });
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
    },
    User: {
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield UsersFaculties_1.default.find({ userId: parent._id }); }),
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
    },
    UsersClasses: {
        class: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(parent.classId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
    },
    UsersFaculties: {
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
        faculty: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(parent.facultyId); }),
    },
    UsersRoles: {
        role: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(parent.roleId); }),
        user: (parent) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(parent.userId); }),
    }
};
exports.default = nestedResolvers;
