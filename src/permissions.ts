import { and, or, rule, shield } from 'graphql-shield';

const isAuthenticated = rule()((_: any, args: any, { user }) => {
  return user !== null;
})

export default shield({
  Query: {
    // # Attendance
    attendances: isAuthenticated,
    attendance: isAuthenticated,
    // # Class
    classes: isAuthenticated,
    class: isAuthenticated,
    // # ClassInstance
    classInstances: isAuthenticated,
    classInstance: isAuthenticated,
    // # ClassModule
    classModules: isAuthenticated,
    classModule: isAuthenticated,
    // # ClassSchedule
    classSchedules: isAuthenticated,
    classSchedule: isAuthenticated,
    // # Classwork's
    classworks: isAuthenticated,
    classwork: isAuthenticated,
    // # Faculty
    faculties: isAuthenticated,
    faculty: isAuthenticated,
    // # Notification
    notifications: isAuthenticated,
    notification: isAuthenticated,
    // # NotificationType
    notificationTypes: isAuthenticated,
    notificationType: isAuthenticated,
    // # Role
    roles: isAuthenticated,
    role: isAuthenticated,
    // # User
    users: isAuthenticated,
    user: isAuthenticated,
    // # UsersClassesRoles
    usersClassesRoles: isAuthenticated,
    userClassRole: isAuthenticated,
    // # UsersFacultiesRoles
    usersFacultiesRoles: isAuthenticated,
    userFacultyRole: isAuthenticated,
    // # UsersRoles
    usersRoles: isAuthenticated,
    userRole: isAuthenticated,
  }
})