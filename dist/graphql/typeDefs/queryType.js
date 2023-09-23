"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
  type Query {
    # Attendance
    attendances(limit: Int): [Attendance]!
    attendance(_id: ID!): Attendance
    # Class
    classes(limit: Int, name: String): [Class]!
    class(_id: ID!): Class
    # ClassInstance
    classInstances(limit: Int): [ClassInstance]!
    classInstance(_id: ID!): ClassInstance
    # ClassInstancesModulesSchedules
    ClassInstancesModulesSchedules(limit: Int): [ClassInstancesModulesSchedules]!
    ClassInstanceModuleSchedule(_id: ID!): ClassInstancesModulesSchedules!
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
    users(limit: Int, name: String): [User]!
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
`;
