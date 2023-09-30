import nestedQueryResolvers from "./resolvers/nestedResolvers";
import mutationResolvers from "./resolvers/mutationResolver";
import mutationType from "./typeDefs/mutationType";
import queryType from "./typeDefs/queryType";
import controllers from "./controllers/index";

export const typeDefs = `#graphql
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
  ${queryType}

  # type Mutation
  ${mutationType}
`;


export const resolvers = {
  Query: {

    // Attendance
    attendances: controllers.get_attendances,
    attendance: controllers.get_attendance,

    // Class
    classes: controllers.get_classes,
    class: controllers.get_class,

    // ClassInstance
    classInstances: controllers.get_class_instances,
    classInstance: controllers.get_class_instance,

    // ClassInstancesModulesSchedules
    ClassInstancesModulesSchedules: controllers.get_class_instances_modules_schedules,
    ClassInstanceModuleSchedule: controllers.get_class_instance_module_schedule,

    // ClassModule
    classModules: controllers.get_class_modules,
    classModule: controllers.get_class_module,

    // ClassSchedule
    classSchedules: controllers.get_class_schedules,
    classSchedule: controllers.get_class_schedule,

    // Classwork
    classworks: controllers.get_classworks,
    classwork: controllers.get_classwork,

    // Faculty
    faculties: controllers.get_faculties,
    faculty: controllers.get_faculty,

    // Notification
    notifications: controllers.get_notifications,
    notification: controllers.get_notification,

    // NotificationType
    notificationTypes: controllers.get_notification_types,
    notificationType: controllers.get_notification_type,

    // Role
    roles: controllers.get_roles,
    role: controllers.get_role,

    // User
    users: controllers.get_users,
    user: controllers.get_user,

    // UsersClassesRoles
    usersClassesRoles: controllers.get_users_classes_roles,
    userClassRole: controllers.get_user_class_role,

    // UsersFacultiesRoles
    usersFacultiesRoles: controllers.get_users_faculties_roles,
    userFacultyRole: controllers.get_user_faculty_role,

    // UsersRoles
    usersRoles: controllers.get_users_roles,
    userRole: controllers.get_user_role,
  },
  
  ...nestedQueryResolvers,

  ...mutationResolvers,
};

