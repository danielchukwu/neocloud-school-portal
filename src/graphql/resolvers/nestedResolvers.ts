import mongoose from "mongoose";
import Class from "../../models/Class";
import ClassModule from "../../models/ClassModule";
import ClassSchedule from "../../models/ClassSchedule";
import Classwork from "../../models/Classwork";
import Faculty from "../../models/Faculty";
import NotificationType from "../../models/NotificationType";
import Role from "../../models/Role";
import User from "../../models/User";
import UsersClassesRoles from "../../models/UsersClassesRoles";
import UsersFacultiesRoles from "../../models/UsersFacultiesRoles";

const nestedResolvers = {
  Attendance: {
    class: async (parent: any) => await Class.findById(parent.classId),
    user: async (parent: any) => await User.findById(parent.userId),
    classSchedule: async (parent: any) => await ClassSchedule.findById(parent.classScheduleId),
  },
  Class: {
    faculty: async (parent: any) => await Faculty.findById(parent.facultyId),
    educators: async (parent: any) => {
      const role = await Role.findOne({name: 'Educator'});
      const usersClassRolesList = await UsersClassesRoles.find({roleId: role?._id, classId: parent._id});

      const educators: any[] = [];

      await Promise.all(usersClassRolesList.map(async(item) => {
        educators.push(await User.findById(item.userId));
      }));

      return educators;
    },
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
      const role = await Role.findOne({name: 'Educator'});
      const usersFacultiesRolesList = await UsersFacultiesRoles.find({roleId: role?._id, facultyId: parent._id});

      const educators: any[] = [];

      await Promise.all(usersFacultiesRolesList.map(async(item) => {
        educators.push(await User.findById(item.userId));
      }));

      return educators;
    },
    students: async (parent: any) => {
      // const role = await Role.find({name: 'Student'});
      // return await User.find({roleId: role[0]._id, facultyId: parent._id});
      const role = await Role.findOne({name: 'Student'});
      const usersFacultiesRolesList = await UsersFacultiesRoles.find({roleId: role?._id, facultyId: parent._id});

      const students: any[] = [];

      await Promise.all(usersFacultiesRolesList.map(async(item) => {
        students.push(await User.findById(item.userId));
      }));

      return students;
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
    faculty: async (parent: any) => await UsersFacultiesRoles.find({userId: parent._id}),
    role: async (parent: any) => await Role.findById(parent.roleId),
  },
  UsersClassesRoles: {
    class: async (parent: any) => await Class.findById(parent.classId),
    user: async (parent: any) => await User.findById(parent.userId),
    role: async (parent: any) => await Role.findById(parent.roleId),
  },
  UsersFacultiesRoles: {
    user: async (parent: any) => await User.findById(parent.userId),
    faculty: async (parent: any) => await Faculty.findById(parent.facultyId),
    role: async (parent: any) => await Role.findById(parent.roleId),
  },
  UsersRoles: {
    role: async (parent: any) => await Role.findById(parent.roleId),
    user: async (parent: any) => await User.findById(parent.userId),
  }
};

export default nestedResolvers;