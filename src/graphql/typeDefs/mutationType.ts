import mutationInputs from "../typeDefs/input";

const mutationType = `#graphql
  # Mutation Input Definitions
  ${mutationInputs}

  type Mutation {
    # Attendance
    createAttendance(attendance: createAttendanceInput!): Attendance!
    updateAttendance(_id: ID!, attendance: updateAttendanceInput!): Attendance!
    deleteAttendance(_id: ID!): [Attendance]!
    # Class
    createClass(class: createClassInput!): Class!
    updateClass(_id: ID!, class: updateClassInput): Class!
    deleteClass(_id: ID!): [Class]!
    # ClassInstance
    createClassInstance(classInstance: createClassInstanceInput!): ClassInstance!
    updateClassInstance(_id: ID!, classInstance: updateClassInstanceInput): ClassInstance!
    deleteClassInstance(_id: ID!): [ClassInstance]!
    # ClassModule
    createClassModule(classModule: createClassModuleInput!): ClassModule!
    updateClassModule(_id: ID!, classModule: updateClassModuleInput): ClassModule!
    deleteClassModule(_id: ID!): [ClassModule]!
    # ClassSchedule
    createClassSchedule(classSchedule: createClassScheduleInput!): ClassSchedule!
    updateClassSchedule(_id: ID!, classSchedule: updateClassScheduleInput): ClassSchedule!
    deleteClassSchedule(_id: ID!): [ClassSchedule]!
    # Classwork's
    createClasswork(classwork: createClassworkInput!): Classwork!
    updateClasswork(_id: ID!, classwork: updateClassworkInput): Classwork!
    deleteClasswork(_id: ID!): [Classwork]!
    # Faculty
    createFaculty(faculty: createFacultyInput!): Faculty!
    updateFaculty(_id: ID!, faculty: updateFacultyInput): Faculty!
    deleteFaculty(_id: ID!): [Faculty]!
    # Notification
    createNotification(notification: createNotificationInput!): Notification!
    # NotificationType
    createNotificationType(notificationType: createNotificationTypeInput!): NotificationType!
    updateNotificationType(_id: ID!, notificationType: updateNotificationTypeInput): NotificationType!
    deleteNotificationType(_id: ID!): [NotificationType]!
    # Role
    createRole(role: createRoleInput!): Role!
    updateRole(_id: ID!, role: updateRoleInput): Role!
    deleteRole(_id: ID!): [Role]!
    # User
    createUser(user: createUserInput!): User!
    updateUser(_id: ID!, user: updateUserInput): User!
    deleteUser(_id: ID!): [User]!
    # UsersClassesRoles
    createUsersClassesRoles(usersClassesRoles: createUsersClassesRolesInput!): UsersClassesRoles!
    updateUsersClassesRoles(_id: ID!, usersClassesRoles: updateUsersClassesRolesInput): UsersClassesRoles!
    deleteUsersClassesRoles(_id: ID!): [UsersClassesRoles]!
    # UsersFaculties
    createUsersFacultiesRoles(usersFacultiesRoles: createUsersFacultiesRolesInput!): UsersFacultiesRoles!
    updateUsersFacultiesRoles(_id: ID!, usersFacultiesRoles: updateUsersFacultiesRolesInput): UsersFacultiesRoles!
    deleteUsersFacultiesRoles(_id: ID!): [UsersFacultiesRoles]!
    # UsersRoles
    createUsersRoles(userRole: createUsersRolesInput!): UsersRoles!
    updateUsersRoles(_id: ID!, userRole: updateUsersRolesInput): UsersRoles!
    deleteUsersRoles(_id: ID!): [UsersRoles]!
  }
`;

export default mutationType;