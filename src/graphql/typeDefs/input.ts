const mutationInputs = `#graphql
  # Attendance
  input createAttendanceInput { classId: ID!, userId: ID!, classScheduleId: ID! }
  input updateAttendanceInput { classId: ID, userId: ID, classScheduleId: ID }
  
  # Class
  input createClassInput { name: String!, avatar: String!, about: String!, facultyId: ID! }
  input updateClassInput { name: String, avatar: String, about: String, facultyId: ID }
  
  # ClassInstance
  input createClassInstanceInput { isCompleted: Boolean!, classId: ID! educatorId: ID! }
  input updateClassInstanceInput { isCompleted: Boolean, educatorId: ID }
  
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
  input createNotificationInput { body: String, notificationTypeId: ID!, classworkId: ID, userId: ID, classInstanceId: ID, facultyId: ID}
  
  # NotificationType
  input createNotificationTypeInput { name: String! }
  input updateNotificationTypeInput { name: String }
  
  # Role
  input createRoleInput { name: String! }
  input updateRoleInput { name: String }
  
  # User
  input createUserInput { name: String!, email: String!, avatar: String, cover: String, bio: String!, phone: String, password: String! roleId: String! }
  input updateUserInput { name: String, email: String, avatar: String, cover: String, bio: String, phone: String roleId: String }
  
  # UsersClassesRoles
  input createUsersClassesRolesInput { userId: ID!, classId: ID!, roleId: ID!}
  input updateUsersClassesRolesInput { userId: ID, classId: ID, roleId: ID }
  
  # UsersClassesRoles
  input createUsersFacultiesRolesInput { userId: ID!, facultyId: ID!, roleId: ID! }
  input updateUsersFacultiesRolesInput { userId: ID, facultyId: ID, roleId: ID }
  
  # UsersRoles
  input createUsersRolesInput { userId: ID!, roleId: ID! }
  input updateUsersRolesInput { userId: ID, roleId: ID }
`;

export default mutationInputs;