import models from '../../models/index';
import { GraphQLError } from "graphql";
import { handleError } from "../../utils/errorHandler";
import { createAccessAndRefreshToken, decodeToken } from "../../jwt";
import dateScalar from '../scalar/scalar';

const mutationResolvers = {
  Date: dateScalar,
  Mutation: {
    // # Auth Entry Points
    login: async (_: any, args: {email: string, password: string}) => {
      try {
        const authData = await models.User.login(args.email, args.password);
        return authData;
      } catch (err: any) {
        console.log(err);
        const errors = handleError(err);
        return new GraphQLError('An error occurred', {extensions: {errors}});
      }
    },
    signup: async (_: any, args: {name: string, phone: string, email: string, password: string}) => {
      try {
        await models.User.create(args);
        const authData = await models.User.login(args.email, args.password);
        return authData;
      } catch (err: any) {
        console.log(err);
        const errors = handleError(err);
        return new GraphQLError('An error occurred', {extensions: {errors}});
      }
    },
    refreshToken: async (_: any, args: {refreshToken: string}, context: any) => {
      try {
        const payload = decodeToken(args.refreshToken);
        console.log(payload);
        if (payload) {
          const user = await models.User.findById(payload.sub);
          const {access_token, refresh_token} = await createAccessAndRefreshToken(user as any);
          return {access_token, refresh_token, user};
        }
      } catch (err: any) {
        console.log(err);
        const errors = handleError(err);
        return new GraphQLError('An error occurred', {extensions: {errors}});
      }
    },

    // # Attendance
    createAttendance: async (_: any, args: { attendance: {} }) => {
      const attendance = new models.Attendance(args.attendance);
      return attendance.save();
    },
    updateAttendance: async (_: any, args: { _id: String, attendance: {} }) => {
      const attendance = await models.Attendance.findByIdAndUpdate(args._id, args.attendance);
      return await attendance?.save();
    },
    deleteAttendance: async (_: any, args: { _id: String }) => {
      await models.Attendance.findByIdAndDelete(args._id);
      return await models.Attendance.find({});
    },
    
    // Class
    createClass: async (_: any, args: { class: {} }) => {
      const class_ = new models.Class(args.class);
      return class_.save();
    },
    updateClass: async (_: any, args: { _id: String, class: {} }) => {
      const class_ = await models.Class.findByIdAndUpdate(args._id, args.class);
      return await class_?.save();
    },
    deleteClass: async (_: any, args: { _id: String }) => {
      await models.Class.findByIdAndDelete(args._id);
      return await models.Class.find({});
    },
    
    // ClassInstance
    createClassInstance: async (_: any, args: { classInstance: {} }) => {
      const classInstance = new models.ClassInstance(args.classInstance);
      return classInstance.save();
    },
    updateClassInstance: async (_: any, args: { _id: String, classInstance: {} }) => {
      const classInstance = await models.ClassInstance.findByIdAndUpdate(args._id, args.classInstance);
      return await classInstance?.save();
    },
    deleteClassInstance: async (_: any, args: { _id: String }) => {
      await models.ClassInstance.findByIdAndDelete(args._id);
      return await models.ClassInstance.find({});
    },
    
    // ClassModule
    createClassModule: async (_: any, args: { classModule: {} }) => {
      const classModule = new models.ClassModule(args.classModule);
      return classModule.save();
    },
    updateClassModule: async (_: any, args: { _id: String, classModule: {} }) => {
      const classModule = await models.ClassModule.findByIdAndUpdate(args._id, args.classModule);
      return await classModule?.save();
    },
    deleteClassModule: async (_: any, args: { _id: String }) => {
      await models.ClassModule.findByIdAndDelete(args._id);
      return await models.ClassModule.find({});
    },
    
    // ClassSchedule
    createClassSchedule: async (_: any, args: { classSchedule: {} }) => {
      const classSchedule = new models.ClassSchedule(args.classSchedule);
      return classSchedule.save();
    },
    updateClassSchedule: async (_: any, args: { _id: String, classSchedule: {} }) => {
      const classSchedule = await models.ClassSchedule.findByIdAndUpdate(args._id, args.classSchedule);
      return await classSchedule?.save();
    },
    deleteClassSchedule: async (_: any, args: { _id: String }) => {
      await models.ClassSchedule.findByIdAndDelete(args._id);
      return await models.ClassSchedule.find({});
    },
    
    // Classwork
    createClasswork: async (_: any, args: { classwork: {} }) => {
      const classwork = new models.Classwork(args.classwork);
      return classwork.save();
    },
    updateClasswork: async (_: any, args: { _id: String, classwork: {} }) => {
      const classwork = await models.Classwork.findByIdAndUpdate(args._id, args.classwork);
      return await classwork?.save();
    },
    deleteClasswork: async (_: any, args: { _id: String }) => {
      await models.Classwork.findByIdAndDelete(args._id);
      return await models.Classwork.find({});
    },
    
    // Faculty
    createFaculty: async (_: any, args: { faculty: {} }) => {
      const faculty = new models.Faculty(args.faculty);
      return faculty.save();
    },
    updateFaculty: async (_: any, args: { _id: String, faculty: {} }) => {
      const faculty = await models.Faculty.findByIdAndUpdate(args._id, args.faculty);
      return await faculty?.save();
    },
    deleteFaculty: async (_: any, args: { _id: String }) => {
      await models.Faculty.findByIdAndDelete(args._id);
      return await models.Faculty.find({});
    },
    
    // Notification
    createNotification: async (_: any, args: { notification: {} }) => {
      const notification = new models.Notification(args.notification);
      return notification.save();
    },
    
    // NotificationType
    createNotificationType: async (_: any, args: { notificationType: {} }) => {
      const notificationType = new models.NotificationType(args.notificationType);
      return notificationType.save();
    },
    updateNotificationType: async (_: any, args: { _id: String, notificationType: {} }) => {
      const notificationType = await models.NotificationType.findByIdAndUpdate(args._id, args.notificationType);
      return await notificationType?.save();
    },
    deleteNotificationType: async (_: any, args: { _id: String }) => {
      await models.NotificationType.findByIdAndDelete(args._id);
      return await models.NotificationType.find({});
    },
    
    // Role
    createRole: async (_: any, args: { role: {} }) => {
      const role = new models.Role(args.role);
      return role.save();
    },
    updateRole: async (_: any, args: { _id: String, role: {} }) => {
      const role = await models.Role.findByIdAndUpdate(args._id, args.role);
      return await role?.save();
    },
    deleteRole: async (_: any, args: { _id: String }) => {
      await models.Role.findByIdAndDelete(args._id);
      return await models.Role.find({});
    },
    
    // User
    createUser: async (_: any, args: { user: {} }) => {
      const user = new models.User(args.user);
      return user.save();
    },
    updateUser: async (_: any, args: { _id: String, user: {} }) => {
      const user = await models.User.findByIdAndUpdate(args._id, args.user);
      return await user?.save();
    },
    deleteUser: async (_: any, args: { _id: String }) => {
      await models.User.findByIdAndDelete(args._id);
      return await models.User.find({});
    },
    
    // UsersClasses
    createUsersClassesRoles: async (_: any, args: { usersClassesRoles: {} }) => {
      const usersClassesRoles = new models.UsersClassesRoles(args.usersClassesRoles);
      return usersClassesRoles.save();
    },
    updateUsersClassesRoles: async (_: any, args: { _id: String, usersClassesRoles: {} }) => {
      const usersClassesRoles = await models.UsersClassesRoles.findByIdAndUpdate(args._id, args.usersClassesRoles);
      return await usersClassesRoles?.save();
    },
    deleteUsersClassesRoles: async (_: any, args: { _id: String }) => {
      await models.UsersClassesRoles.findByIdAndDelete(args._id);
      return await models.UsersClassesRoles.find({});
    },
    
    // UsersFaculties
    createUsersFacultiesRoles: async (_: any, args: { usersFacultiesRoles: {} }) => {
      const usersFacultiesRoles = new models.UsersFacultiesRoles(args.usersFacultiesRoles);
      return usersFacultiesRoles.save();
    },
    updateUsersFacultiesRoles: async (_: any, args: { _id: String, usersFacultiesRoles: {} }) => {
      const usersFacultiesRoles = await models.UsersFacultiesRoles.findByIdAndUpdate(args._id, args.usersFacultiesRoles);
      return await usersFacultiesRoles?.save();
    },
    deleteUsersFacultiesRoles: async (_: any, args: { _id: String }) => {
      await models.UsersFacultiesRoles.findByIdAndDelete(args._id);
      return await models.UsersFacultiesRoles.find({});
    },
    
    // UsersRoles
    createUsersRoles: async (_: any, args: { usersRoles: {} }) => {
      const usersRoles = new models.UsersRoles(args.usersRoles);
      return usersRoles.save();
    },
    updateUsersRoles: async (_: any, args: { _id: String, usersRoles: {} }) => {
      const usersRoles = await models.UsersRoles.findByIdAndUpdate(args._id, args.usersRoles);
      return await usersRoles?.save();
    },
    deleteUsersRoles: async (_: any, args: { _id: String }) => {
      await models.UsersRoles.findByIdAndDelete(args._id);
      return await models.UsersRoles.find({});
    },
  }
};

export default mutationResolvers;