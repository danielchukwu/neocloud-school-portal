export default `#graphql
  type Query {
    # Attendance
    attendances(page: Int): [Attendance]!
    attendance(_id: ID!): Attendance
    # Class
    classes(page: Int, name: String): [Class]!
    class(_id: ID!): Class
    # ClassInstance
    classInstances(page: Int): [ClassInstance]!
    classInstance(_id: ID!): ClassInstance
    # ClassInstancesModulesSchedules
    ClassInstancesModulesSchedules(page: Int): [ClassInstancesModulesSchedules]!
    ClassInstanceModuleSchedule(_id: ID!): ClassInstancesModulesSchedules!
    # ClassModule
    classModules(page: Int, classId: ID): [ClassModule]!
    classModule(_id: ID!): ClassModule
    # ClassSchedule
    classSchedules(page: Int): [ClassSchedule]!
    classSchedule(_id: ID!): ClassSchedule
    # Classwork's
    classworks(page: Int): [Classwork]!
    classwork(_id: ID!): Classwork
    # Faculty
    faculties(page: Int): [Faculty]!
    faculty(_id: ID!): Faculty
    # Notification
    notifications(page: Int): [Notification]!
    notification(_id: ID!): Notification
    # NotificationType
    notificationTypes(page: Int): [NotificationType]!
    notificationType(_id: ID!): NotificationType
    # Role
    roles(page: Int): [Role]!
    role(_id: ID!): Role
    # User
    users(page: Int, name: String): [User]!
    user(_id: ID!): User
    # UsersClassesRoles
    usersClassesRoles(page: Int): [UsersClassesRoles]!
    userClassRole(_id: ID!): UsersClassesRoles
    # UsersFacultiesRoles
    usersFacultiesRoles(page: Int): [UsersFacultiesRoles]!
    userFacultyRole(_id: ID!): UsersFacultiesRoles
    # UsersRoles
    usersRoles(page: Int): [UsersRoles]!
    userRole(_id: ID!): UsersRoles
  }
`