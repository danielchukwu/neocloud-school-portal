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
import UsersRoles from "../models/UsersRoles";

export const typeDefs = `#graphql
  # Types 
  type Attendance {
    _id: ID!
    classId: ID!
    userId: ID!
    classScheduleId: ID!
  }
  type Class {
    _id: ID!
    title: String!
    description: String!
    facultyId: ID!
  }
  type ClassInstance {
    _id: ID!
    isCompleted: Boolean!
    classId: ID!
  }
  type ClassModule {
    _id: ID!
    order: Int!
    title: String!
    ClassId: ID!
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
  }
  type Classwork {
    _id: ID!
    title: String!
    body: String!
    deadline: String!
    classScheduleId: ID!
    facultyId: ID!
    classId: ID!
  }
  type Faculty {
    _id: ID!
    name: String!
    hodId: ID!
  }
  type Notification {
    _id: ID!
    body: String
    notificationTypeId: ID!
    classworkId: ID
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
    phone: String!
    facultyId: ID!
    password: String!
  }
  type UsersClasses {
    _id: ID!
    userId: ID!
    classId: ID!
  }
  type UsersRoles {
    _id: ID!
    userId: ID!
    roleId: ID!
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
    # UsersRoles
    usersRoles: [UsersRoles]!
    userRole(_id: ID!): UsersRoles
  }
`;

const users = [{ name: "daniel" }, { name: "idris" }];

// (){} : ! # _ => ""
export const resolvers = {
  Query: {
    // Attendance
    attendances: async () => await Attendance.find({}),
    attendance: async (_: any
      , args: { _id: String }) => await Attendance.find({ _id: args._id }),
    // Class
    classes: async () => await Class.find({}),
    class: async (_: any, args: { _id: String }) => await Class.find({ _id: args._id }),
    // ClassInstance
    classInstances: async () => await ClassInstance.find({}),
    classInstance: async (_: any, args: { _id: String }) => await ClassInstance.find({ _id: args._id }),
    // ClassModule
    classModules: async () => await ClassModule.find({}),
    classModule: async (_: any, args: { _id: String }) => await ClassModule.find({ _id: args._id }),
    // ClassSchedule
    classSchedules: async () => await ClassSchedule.find({}),
    classSchedule: async (_: any, args: { _id: String }) => await ClassSchedule.find({ _id: args._id }),
    // Classwork
    classworks: async () => await Classwork.find({}),
    classwork: async (_: any, args: { _id: String }) => await Classwork.find({ _id: args._id }),
    // Faculty
    faculties: async () => await Faculty.find({}),
    faculty: async (_: any, args: { _id: String }) => await Faculty.find({ _id: args._id }),
    // Notification
    notifications: async () => await Notification.find({}),
    notification: async (_: any, args: { _id: String }) => await Notification.find({ _id: args._id }),
    // NotificationType
    notificationTypes: async () => await NotificationType.find({}),
    notificationType: async (_: any, args: { _id: String }) => await NotificationType.find({ _id: args._id }),
    // Role
    roles: async () => await Role.find({}),
    role: async (_: any, args: { _id: String }) => await Role.find({ _id: args._id }),
    // User
    users: async () => await User.find({}),
    user: async (_: any, args: { _id: String }) => await User.find({ _id: args._id }),
    // UsersClasses
    usersClasses: async () => await UsersClasses.find({}),
    userClass: async (_: any, args: { _id: String }) => await UsersClasses.find({ _id: args._id }),
    // UsersRoles
    usersRoles: async () => await UsersRoles.find({}),
    userRole: async (_: any, args: { _id: String }) => await UsersRoles.find({ _id: args._id }),
  },
};
