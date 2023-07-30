import Attendance from "../models/Attendance";
import Class from "../models/Class";
import ClassInstance from "../models/ClassInstance";
import ClassModule from "../models/ClassModule";
import ClassSchedule from "../models/ClassSchedule";
import Classwork from "../models/Classwork";
import Faculty from "../models/Faculty";
import Notification from "../models/Notification";
import NotificationType from "../models/NotificationType";
import Role from "../models/Role";
import User from "../models/User";
import UsersClassesRoles from "../models/UsersClassesRoles";
import UsersFacultiesRoles from "../models/UsersFacultiesRoles";
import UsersRoles from "../models/UsersRoles";
import nestedQueryResolvers from "./resolvers/nestedResolvers";
import mutationResolvers from "./resolvers/mutationResolver";
import mutationType from "./typeDefs/mutationType";

export const typeDefs = `#graphql
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
    notificationTypeId: ID
    userId: ID
    classworkId: ID!
    classInstanceId: ID!
    facultyId: ID!
    # below fields are not on model
    notificationType: NotificationType
    user: User
    classwork: Classwork!
    classInstance: ClassInstance!
    faculty: Faculty!
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
    roleId: ID!
    # below fields are not on model
    faculty: [UsersFacultiesRoles]!
    role: Role!
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
    classModules(limit: Int, classId: ID): [ClassModule]!
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
    # UsersClassesRoles
    usersClassesRoles(limit: Int): [UsersClassesRoles]!
    userClassRole(_id: ID!): UsersClassesRoles
    # UsersFacultiesRoles
    usersFacultiesRoles(limit: Int): [UsersFacultiesRoles]!
    userFacultyRole(_id: ID!): UsersFacultiesRoles
    # UsersRoles
    usersRoles(limit: Int): [UsersRoles]!
    userRole(_id: ID!): UsersRoles
  }

  # type Mutation
  ${mutationType}
`;


// (){} : ! # _ => ""
export const resolvers = {
  Query: {
    // Attendance
    attendances: async (_: any, args: {limit: number}) => await Attendance.find({}).limit(args.limit ?? 100),
    attendance: async (_: any
      , args: { _id: String }) => await Attendance.findById(args._id),
    // Class
    classes: async (_: any, args: {limit: number}) => await Class.find({}).limit(args.limit ?? 100),
    class: async (_: any, args: { _id: String }) => await Class.findById(args._id),
    // ClassInstance
    classInstances: async (_: any, args: {limit: number}) => await ClassInstance.find({}).limit(args.limit ?? 100),
    classInstance: async (_: any, args: { _id: String }) => await ClassInstance.findById(args._id),
    // ClassModule
    classModules: async (_: any, args: {limit: number, classId: String}) => await ClassModule.find(args.classId ? {classId: args.classId} : {}).limit(args.limit ?? 100),
    classModule: async (_: any, args: { _id: String }) => await ClassModule.findById(args._id),
    // ClassSchedule
    classSchedules: async (_: any, args: {limit: number}) => await ClassSchedule.find({}).limit(args.limit ?? 100),
    classSchedule: async (_: any, args: { _id: String }) => await ClassSchedule.findById(args._id),
    // Classwork
    classworks: async (_: any, args: {limit: number}) => await Classwork.find({}).limit(args.limit ?? 100),
    classwork: async (_: any, args: { _id: String }) => await Classwork.findById(args._id),
    // Faculty
    faculties: async (_: any, args: {limit: number}) => await Faculty.find({}).limit(args.limit ?? 100),

    faculty: async (_: any, args: { _id: String }) => await Faculty.findById(args._id),
    // Notification
    notifications: async (_: any, args: {limit: number}) => await Notification.find({}).limit(args.limit ?? 100),
    notification: async (_: any, args: { _id: String }) => await Notification.findById(args._id),
    // NotificationType
    notificationTypes: async (_: any, args: {limit: number}) => await NotificationType.find({}).limit(args.limit ?? 100),
    notificationType: async (_: any, args: { _id: String }) => await NotificationType.findById(args._id),
    // Role
    roles: async (_: any, args: {limit: number}) => await Role.find({}).limit(args.limit ?? 100),
    role: async (_: any, args: { _id: String }) => await Role.findById(args._id),
    // User
    users: async (_: any, args: {limit: number}) => await User.find({}).limit(args.limit ?? 100),
    user: async (_: any, args: { _id: String }) => await User.findById(args._id),
    // UsersClassesRoles
    usersClassesRoles: async (_: any, args: {limit: number}) => await UsersClassesRoles.find({}).limit(args.limit ?? 100),
    userClass: async (_: any, args: { _id: String }) => await UsersClassesRoles.findById(args._id),
    // UsersFacultiesRoles
    usersFacultiesRoles: async (_: any, args: {limit: number}) => await UsersFacultiesRoles.find({}).limit(args.limit ?? 100),
    userFaculty: async (_: any, args: { _id: String }) => await UsersFacultiesRoles.findById(args._id),
    // UsersRoles
    usersRoles: async (_: any, args: {limit: number}) => await UsersRoles.find({}).limit(args.limit ?? 100),
    userRole: async (_: any, args: { _id: String }) => await UsersRoles.findById(args._id),
  },
  
  ...nestedQueryResolvers,

  ...mutationResolvers,
};