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
exports.resolvers = exports.typeDefs = void 0;
const Attendance_1 = __importDefault(require("../models/Attendance"));
const Class_1 = __importDefault(require("../models/Class"));
const ClassInstance_1 = __importDefault(require("../models/ClassInstance"));
const ClassModule_1 = __importDefault(require("../models/ClassModule"));
const ClassSchedule_1 = __importDefault(require("../models/ClassSchedule"));
const Classwork_1 = __importDefault(require("../models/Classwork"));
const Faculty_1 = __importDefault(require("../models/Faculty"));
const Notification_1 = __importDefault(require("../models/Notification"));
const NotificationType_1 = __importDefault(require("../models/NotificationType"));
const Role_1 = __importDefault(require("../models/Role"));
const User_1 = __importDefault(require("../models/User"));
const UsersClasses_1 = __importDefault(require("../models/UsersClasses"));
const UsersFaculties_1 = __importDefault(require("../models/UsersFaculties"));
const UsersRoles_1 = __importDefault(require("../models/UsersRoles"));
const nestedResolvers_1 = __importDefault(require("./resolvers/nestedResolvers"));
const mutationResolver_1 = __importDefault(require("./resolvers/mutationResolver"));
const mutationType_1 = __importDefault(require("./typeDefs/mutationType"));
exports.typeDefs = `#graphql
  # Types 
  type Attendance {
    _id: ID!
    classId: ID!
    userId: ID!
    classScheduleId: ID!
    class: Class!
    user: User!
    classSchedule: ClassSchedule!
  }
  type Class {
    _id: ID!
    name: String!
    about: String!
    facultyId: ID!
    faculty: Faculty!
  }
  type ClassInstance {
    _id: ID!
    isCompleted: Boolean!
    classId: ID!
    class: Class!
  }
  type ClassModule {
    _id: ID!
    order: Int!
    title: String!
    classId: ID!
    class: Class!
  }
  type ClassSchedule {
    _id: ID!
    order: Int!
    title: String!
    description: String!
    date: String!
    startTime: String
    endTime: String
    classModuleId: ID!
    classModule: ClassModule!
  }
  type Classwork {
    _id: ID!
    title: String!
    body: String!
    deadline: String!
    classId: ID!
    facultyId: ID!
    classScheduleId: ID!
    class: Class!
    faculty: Faculty!
    classSchedule: ClassSchedule!
  }
  type Faculty {
    _id: ID!
    name: String!
    about: String!
    hodId: ID!
    # Not default field values below
    hod: User!
    # classesCount: Int!
    # educatorsCount: Int!
    # studentsCount: Int!
  }
  type Notification {
    _id: ID!
    body: String
    notificationTypeId: ID!
    classworkId: ID
    notificationType: NotificationType!
    classwork: Classwork
  }
  type NotificationType{
    _id: ID!
    title: String!
  }
  type Role {
    _id: ID!
    name: String!
  }
  type User {
    _id: ID!
    name: String!
    email: String!
    avatar: String
    cover: String
    bio: String!
    phone: String
    password: String!
    faculty: Faculty!
  }
  type UsersClasses {
    _id: ID!
    userId: ID!
    classId: ID!
    user: User!
    class: Class!
  }
  type UsersFaculties {
    _id: ID!
    userId: ID!
    facultyId: ID!
    user: User!
    faculty: Faculty!
  }
  type UsersRoles {
    _id: ID!
    userId: ID!
    roleId: ID!
    user: User!
    role: Role!
  }

  # RootQuery
  type Query {
    # Attendance
    attendances(limit: Int): [Attendance]!
    attendance(_id: ID!): Attendance
    # Class
    classes(limit: Int): [Class]!
    class(_id: ID!): Class
    # ClassInstance
    classInstances(limit: Int): [ClassInstance]!
    classInstance(_id: ID!): ClassInstance
    # ClassModule
    classModules(limit: Int): [ClassModule]!
    classModule(_id: ID!): ClassModule
    # ClassSchedule
    classSchedules(limit: Int): [ClassSchedule]!
    classSchedule(_id: ID!): ClassSchedule
    # Classwork's
    classworks(limit: Int): [Classwork]!
    classwork(_id: ID!): Classwork
    # Faculty
    faculties(limit: Int): [Faculty]!
    faculty(_id: ID!): Faculty
    # Notification
    notifications(limit: Int): [Notification]!
    notification(_id: ID!): Notification
    # NotificationType
    notificationTypes(limit: Int): [NotificationType]!
    notificationType(_id: ID!): NotificationType
    # Role
    roles(limit: Int): [Role]!
    role(_id: ID!): Role
    # User
    users(limit: Int): [User]!
    user(_id: ID!): User
    # UsersClasses
    usersClasses(limit: Int): [UsersClasses]!
    userClass(_id: ID!): UsersClasses
    # UsersFaculties
    usersFaculties(limit: Int): [UsersFaculties]!
    userFaculty(_id: ID!): UsersFaculties
    # UsersRoles
    usersRoles(limit: Int): [UsersRoles]!
    userRole(_id: ID!): UsersRoles
  }

  # type Mutation
  ${mutationType_1.default}
`;
// (){} : ! # _ => ""
exports.resolvers = Object.assign(Object.assign({ Query: {
        // Attendance
        attendances: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _a; return yield Attendance_1.default.find({}).limit((_a = args.limit) !== null && _a !== void 0 ? _a : 100); }),
        attendance: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Attendance_1.default.findById(args._id); }),
        // Class
        classes: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _b; return yield Class_1.default.find({}).limit((_b = args.limit) !== null && _b !== void 0 ? _b : 100); }),
        class: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Class_1.default.findById(args._id); }),
        // ClassInstance
        classInstances: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _c; return yield ClassInstance_1.default.find({}).limit((_c = args.limit) !== null && _c !== void 0 ? _c : 100); }),
        classInstance: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassInstance_1.default.findById(args._id); }),
        // ClassModule
        classModules: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _d; return yield ClassModule_1.default.find({}).limit((_d = args.limit) !== null && _d !== void 0 ? _d : 100); }),
        classModule: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassModule_1.default.findById(args._id); }),
        // ClassSchedule
        classSchedules: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _e; return yield ClassSchedule_1.default.find({}).limit((_e = args.limit) !== null && _e !== void 0 ? _e : 100); }),
        classSchedule: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield ClassSchedule_1.default.findById(args._id); }),
        // Classwork
        classworks: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _f; return yield Classwork_1.default.find({}).limit((_f = args.limit) !== null && _f !== void 0 ? _f : 100); }),
        classwork: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Classwork_1.default.findById(args._id); }),
        // Faculty
        faculties: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _g; return yield Faculty_1.default.find({}).limit((_g = args.limit) !== null && _g !== void 0 ? _g : 100); }),
        faculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Faculty_1.default.findById(args._id); }),
        // Notification
        notifications: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _h; return yield Notification_1.default.find({}).limit((_h = args.limit) !== null && _h !== void 0 ? _h : 100); }),
        notification: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Notification_1.default.findById(args._id); }),
        // NotificationType
        notificationTypes: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _j; return yield NotificationType_1.default.find({}).limit((_j = args.limit) !== null && _j !== void 0 ? _j : 100); }),
        notificationType: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield NotificationType_1.default.findById(args._id); }),
        // Role
        roles: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _k; return yield Role_1.default.find({}).limit((_k = args.limit) !== null && _k !== void 0 ? _k : 100); }),
        role: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield Role_1.default.findById(args._id); }),
        // User
        users: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _l; return yield User_1.default.find({}).limit((_l = args.limit) !== null && _l !== void 0 ? _l : 100); }),
        user: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.default.findById(args._id); }),
        // UsersClasses
        usersClasses: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _m; return yield UsersClasses_1.default.find({}).limit((_m = args.limit) !== null && _m !== void 0 ? _m : 100); }),
        userClass: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield UsersClasses_1.default.findById(args._id); }),
        // UsersFaculties
        usersFaculties: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _o; return yield UsersFaculties_1.default.find({}).limit((_o = args.limit) !== null && _o !== void 0 ? _o : 100); }),
        userFaculty: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield UsersFaculties_1.default.findById(args._id); }),
        // UsersRoles
        usersRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () { var _p; return yield UsersRoles_1.default.find({}).limit((_p = args.limit) !== null && _p !== void 0 ? _p : 100); }),
        userRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () { return yield UsersRoles_1.default.findById(args._id); }),
    } }, nestedResolvers_1.default), mutationResolver_1.default);
