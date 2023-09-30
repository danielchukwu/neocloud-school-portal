"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const nestedResolvers_1 = __importDefault(require("./resolvers/nestedResolvers"));
const mutationResolver_1 = __importDefault(require("./resolvers/mutationResolver"));
const mutationType_1 = __importDefault(require("./typeDefs/mutationType"));
const queryType_1 = __importDefault(require("./typeDefs/queryType"));
const index_1 = __importDefault(require("./controllers/index"));
exports.typeDefs = `#graphql
  scalar Date
  # Types 
  type Attendance {
    _id: ID!
    classId: ID!
    userId: ID!
    classScheduleId: ID!
    # below fields are not on model
    class: Class!
    user: User!
    classSchedule: ClassSchedule!
  }
  type Class {
    _id: ID!
    name: String!
    avatar: String
    about: String!
    facultyId: ID!
    # below fields are not on model
    modules: [ClassModule]
    faculty: Faculty!
    educators: [User!]!
  }
  type ClassInstance {
    _id: ID!
    isCompleted: Boolean!
    classId: ID!
    educatorId: ID!
    # below fields are not on model
    educator: User!
    class: Class!
  }
  type ClassInstancesModulesSchedules {
    _id: ID!
    classInstanceId: ID!
    classModuleId: ID!
    classScheduleId: ID!
    startTime: Date!
    endTime: Date!
    # below fields are not on model
    classInstance: ClassInstance!
    classModule: ClassModule!
    classSchedule: ClassSchedule!
  }
  type ClassModule {
    _id: ID!
    order: Int!
    title: String!
    classId: ID!
    # below fields are not on model
    class: Class!
    classSchedules: [ClassSchedule]!
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
    # below fields are not on model
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
    # below fields are not on model
    class: Class!
    faculty: Faculty!
    classSchedule: ClassSchedule!
  }
  type Faculty {
    _id: ID!
    name: String!
    about: String!
    hodId: ID!
    # below fields are not on model
    hod: User!
    classes: [Class!]!
    educators: [User!]!
    students: [User!]!
    classesCount: Int!
    educatorsCount: Int!
    studentsCount: Int!
  }
  type Notification {
    _id: ID!
    body: String
    seen: Boolean
    notificationTypeId: ID
    userId: ID
    ownerId: ID
    classworkId: ID
    classInstanceId: ID
    facultyId: ID
    createdAt: Date
    # below fields are not on model
    type: NotificationType
    user: User
    classwork: Classwork
    classInstance: ClassInstance
    faculty: Faculty
  }
  type NotificationType{
    _id: ID!
    name: String!
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
    roleId: ID
    # below fields are not on model
    faculty: [UsersFacultiesRoles]!
    role: Role
    # TODO: implement fields
    # # Educator
    # class: Class
    # student: Student
    # classCount: Number
    # studentsCount: Number
    # completedClasses: Number
    # # Student
    # streak: Number
    # completedClassworks: Number
    # completedClasses: Number
    # totalAttendance: Number
    # longestStreak: Number
    # bestGraduatingStudent: 
  }
  type UsersClassesRoles {
    _id: ID!
    userId: ID!
    classId: ID!
    roleId: ID!
    # below fields are not on model
    user: User!
    class: Class!
    role: Role!
    
  }
  type UsersFacultiesRoles {
    _id: ID!
    userId: ID!
    facultyId: ID!
    roleId: ID!
    # below fields are not on model
    user: User!
    faculty: Faculty!
    role: Role!
  }
  type UsersRoles {
    _id: ID!
    userId: ID!
    roleId: ID!
    # below fields are not on model
    user: User!
    role: Role!
  }
  
  # -----------------
  type AuthData {
    access_token: String!
    refresh_token: String!
    user: User!
  }
  # -----------------

  # RootQuery
  ${queryType_1.default}

  # type Mutation
  ${mutationType_1.default}
`;
exports.resolvers = Object.assign(Object.assign({ Query: {
        // Attendance
        attendances: index_1.default.get_attendances,
        attendance: index_1.default.get_attendance,
        // Class
        classes: index_1.default.get_classes,
        class: index_1.default.get_class,
        // ClassInstance
        classInstances: index_1.default.get_class_instances,
        classInstance: index_1.default.get_class_instance,
        // ClassInstancesModulesSchedules
        ClassInstancesModulesSchedules: index_1.default.get_class_instances_modules_schedules,
        ClassInstanceModuleSchedule: index_1.default.get_class_instance_module_schedule,
        // ClassModule
        classModules: index_1.default.get_class_modules,
        classModule: index_1.default.get_class_module,
        // ClassSchedule
        classSchedules: index_1.default.get_class_schedules,
        classSchedule: index_1.default.get_class_schedule,
        // Classwork
        classworks: index_1.default.get_classworks,
        classwork: index_1.default.get_classwork,
        // Faculty
        faculties: index_1.default.get_faculties,
        faculty: index_1.default.get_faculty,
        // Notification
        notifications: index_1.default.get_notifications,
        notification: index_1.default.get_notification,
        // NotificationType
        notificationTypes: index_1.default.get_notification_types,
        notificationType: index_1.default.get_notification_type,
        // Role
        roles: index_1.default.get_roles,
        role: index_1.default.get_role,
        // User
        users: index_1.default.get_users,
        user: index_1.default.get_user,
        // UsersClassesRoles
        usersClassesRoles: index_1.default.get_users_classes_roles,
        userClassRole: index_1.default.get_user_class_role,
        // UsersFacultiesRoles
        usersFacultiesRoles: index_1.default.get_users_faculties_roles,
        userFacultyRole: index_1.default.get_user_faculty_role,
        // UsersRoles
        usersRoles: index_1.default.get_users_roles,
        userRole: index_1.default.get_user_role,
    } }, nestedResolvers_1.default), mutationResolver_1.default);
