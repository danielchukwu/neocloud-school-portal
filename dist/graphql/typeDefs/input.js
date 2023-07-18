"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutationInputs = `#graphql
  # Attendance
  input createAttendanceInput { classId: ID!, userId: ID!, classScheduleId: ID! }
  input updateAttendanceInput { classId: ID, userId: ID, classScheduleId: ID }
  
  # Class
  input createClassInput { title: String!, description: String!, facultyId: ID! }
  input updateClassInput { title: String, description: String, facultyId: ID }
  
  # ClassInstance
  input createClassInstanceInput { isCompleted: Boolean!, classId: ID! }
  input updateClassInstanceInput { isCompleted: Boolean }
  
  # ClassModule
  input createClassModuleInput { order: Int!, title: String!, classId: ID! }
  input updateClassModuleInput { order: Int, title: String }
  
  # ClassSchedule
  input createClassScheduleInput { order: Int!, title: String!, description: String, date: String!, startTime: String!, endTime: String!, classModuleId: ID! }
  input updateClassScheduleInput { order: Int, title: String, description: String, date: String, startTime: String, endTime: String }
  
  # Classwork
  input createClassworkInput { title: String!, body: String!, deadline: String!, classId: ID!, facultyId: ID!, classScheduleId: ID! }
  input updateClassworkInput { title: String, body: String, deadline: String }
  
  # Faculty
  input createFacultyInput { name: String!, about: String!, hodId: ID! }
  input updateFacultyInput { name: String,about: String, hodId: ID }
  
  # Notification
  input createNotificationInput { body: String, notificationTypeId: ID!, classworkId: ID }
  
  # NotificationType
  input createNotificationTypeInput { title: String! }
  input updateNotificationTypeInput { title: String }
  
  # Role
  input createRoleInput { name: String! }
  input updateRoleInput { name: String }
  
  # User
  input createUserInput { name: String!, email: String!, avatar: String, cover: String, bio: String!, phone: String, password: String! }
  input updateUserInput { name: String, email: String, avatar: String, cover: String, bio: String, phone: String }
  
  # UsersClasses
  input createUsersClassesInput { userId: ID!, classId: ID! }
  input updateUsersClassesInput { userId: ID, classId: ID }
  
  # UsersClasses
  input createUsersFacultiesInput { userId: ID!, facultyId: ID! }
  input updateUsersFacultiesInput { userId: ID, facultyId: ID }
  
  # UsersRoles
  input createUsersRolesInput { userId: ID!, roleId: ID! }
  input updateUsersRolesInput { userId: ID, roleId: ID }
`;
exports.default = mutationInputs;
