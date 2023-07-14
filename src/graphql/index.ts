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
import UsersClasses from "../models/UsersClasses";
import UsersFaculties from "../models/UsersFaculties";
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
    class: Class!
    user: User!
    classSchedule: ClassSchedule!
  }
  type Class {
    _id: ID!
    title: String!
    description: String!
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
    date: String,!
    startTime: String!
    endTime: String!
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
    hodId: ID!
    hod: User!
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
    attendances: [Attendance]!
    attendance(_id: ID!): Attendance
    # Class
    classes: [Class]!
    class(_id: ID!): Class
    # ClassInstance
    classInstances: [ClassInstance]!
    classInstance(_id: ID!): ClassInstance
    # ClassModule
    classModules: [ClassModule]!
    classModule(_id: ID!): ClassModule
    # ClassSchedule
    classSchedules: [ClassSchedule]!
    classSchedule(_id: ID!): ClassSchedule
    # Classwork's
    classworks: [Classwork]!
    classwork(_id: ID!): Classwork
    # Faculty
    faculties: [Faculty]!
    faculty(_id: ID!): Faculty
    # Notification
    notifications: [Notification]!
    notification(_id: ID!): Notification
    # NotificationType
    notificationTypes: [NotificationType]!
    notificationType(_id: ID!): NotificationType
    # Role
    roles: [Role]!
    role(_id: ID!): Role
    # User
    users: [User]!
    user(_id: ID!): User
    # UsersClasses
    usersClasses: [UsersClasses]!
    userClass(_id: ID!): UsersClasses
    # UsersFaculties
    usersFaculties: [UsersFaculties]!
    userFaculty(_id: ID!): UsersFaculties
    # UsersRoles
    usersRoles: [UsersRoles]!
    userRole(_id: ID!): UsersRoles
  }

  # type Mutation
  ${mutationType}
`;


// (){} : ! # _ => ""
export const resolvers = {
  Query: {
    // Attendance
    attendances: async () => await Attendance.find({}),
    attendance: async (_: any
      , args: { _id: String }) => await Attendance.findById(args._id),
    // Class
    classes: async () => await Class.find({}),
    class: async (_: any, args: { _id: String }) => await Class.findById(args._id),
    // ClassInstance
    classInstances: async () => await ClassInstance.find({}),
    classInstance: async (_: any, args: { _id: String }) => await ClassInstance.findById(args._id),
    // ClassModule
    classModules: async () => await ClassModule.find({}),
    classModule: async (_: any, args: { _id: String }) => await ClassModule.findById(args._id),
    // ClassSchedule
    classSchedules: async () => await ClassSchedule.find({}),
    classSchedule: async (_: any, args: { _id: String }) => await ClassSchedule.findById(args._id),
    // Classwork
    classworks: async () => await Classwork.find({}),
    classwork: async (_: any, args: { _id: String }) => await Classwork.findById(args._id),
    // Faculty
    faculties: async () => await Faculty.find({}),
    faculty: async (_: any, args: { _id: String }) => await Faculty.findById(args._id),
    // Notification
    notifications: async () => await Notification.find({}),
    notification: async (_: any, args: { _id: String }) => await Notification.findById(args._id),
    // NotificationType
    notificationTypes: async () => await NotificationType.find({}),
    notificationType: async (_: any, args: { _id: String }) => await NotificationType.findById(args._id),
    // Role
    roles: async () => await Role.find({}),
    role: async (_: any, args: { _id: String }) => await Role.findById(args._id),
    // User
    users: async () => await User.find({}),
    user: async (_: any, args: { _id: String }) => await User.findById(args._id),
    // UsersClasses
    usersClasses: async () => await UsersClasses.find({}),
    userClass: async (_: any, args: { _id: String }) => await UsersClasses.findById(args._id),
    // UsersFaculties
    usersFaculties: async () => await UsersFaculties.find({}),
    userFaculty: async (_: any, args: { _id: String }) => await UsersFaculties.findById(args._id),
    // UsersRoles
    usersRoles: async () => await UsersRoles.find({}),
    userRole: async (_: any, args: { _id: String }) => await UsersRoles.findById(args._id),
  },
  
  ...nestedQueryResolvers,

  ...mutationResolvers,
};
