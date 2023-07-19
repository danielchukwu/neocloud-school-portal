import Class from "../../models/Class";
import ClassModule from "../../models/ClassModule";
import ClassSchedule from "../../models/ClassSchedule";
import Classwork from "../../models/Classwork";
import Faculty from "../../models/Faculty";
import NotificationType from "../../models/NotificationType";
import Role from "../../models/Role";
import User from "../../models/User";
import UsersFaculties from "../../models/UsersFaculties";

const nestedResolvers = {
  Attendance: {
    class: async (parent: any) => await Class.findById(parent.classId),
    user: async (parent: any) => await User.findById(parent.userId),
    classSchedule: async (parent: any) => await ClassSchedule.findById(parent.classScheduleId),
  },
  Class: {
    faculty: async (parent: any) => await Faculty.findById(parent.facultyId),
  },
  ClassInstance: {
    class: async (parent: any) => await Class.findById(parent.classId),
  },
  ClassModule: {
    class: async (parent: any) => await Class.findById(parent.classId),
  },
  ClassSchedule: {
    classModule: async (parent: any) => await ClassModule.findById(parent.classModuleId),
  },
  Classwork: {
    class: async (parent: any) => await Class.findById(parent.classId),
    faculty: async (parent: any) => await Faculty.findById(parent.facultyId),
    classSchedule: async (parent: any) => await ClassSchedule.findById(parent.classScheduleId),
  },
  Faculty: {
    hod: async (parent: any) => await User.findById(parent.hodId),
    classes: async (parent: any) => await Class.find({facultyId: parent._id}),
    educators: async (parent: any) => {
      const role = await Role.find({name: 'Educator'});
      return await User.find({roleId: role[0]._id, facultyId: parent._id});
    },
    students: async (parent: any) => {
      const role = await Role.find({name: 'Student'});
      return await User.find({roleId: role[0]._id, facultyId: parent._id});
    },
    classesCount: async (parent: any) => await Class.find({facultyId: parent._id}).count(),
    educatorsCount: async (parent: any) => {
      const role = await Role.find({name: 'Educator'});
      return await User.find({roleId: role[0]._id, facultyId: parent._id}).count();
    },
    studentsCount: async (parent: any) => {
      const role = await Role.find({name: 'Student'});
      return await User.find({roleId: role[0]._id, facultyId: parent._id}).count();
    },
  },
  Notification: {
    notificationType: async (parent: any) => await NotificationType.findById(parent.notificationTypeId),
    classwork: async (parent: any) => await Classwork.findById(parent.classworkId), 
  },
  User: {
    faculty: async (parent: any) => await UsersFaculties.find({userId: parent._id}),
    role: async (parent: any) => await Role.findById(parent.roleId),
  },
  UsersClasses: {
    class: async (parent: any) => await Class.findById(parent.classId),
    user: async (parent: any) => await User.findById(parent.userId),
  },
  UsersFaculties: {
    user: async (parent: any) => await User.findById(parent.userId),
    faculty: async (parent: any) => await Faculty.findById(parent.facultyId),
  },
  UsersRoles: {
    role: async (parent: any) => await Role.findById(parent.roleId),
    user: async (parent: any) => await User.findById(parent.userId),
  }
};

export default nestedResolvers;