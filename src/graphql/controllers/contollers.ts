import models from "../../models/index";
import { DecodedTokenPayloadType } from "../../types/model_types";

const smLimit = 5;
const mLimit = 10;
const lLimit = 15;
const xlLimit = 20;
const xxlLimit = 25;
const xxxlLimit = 30

// Attendance
export const get_attendances = async (_: any, args: {page: number}) => {
  return await models.Attendance.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_attendance = async (_: any, args: { _id: String }) => {
  return await models.Attendance.findById(args._id);
}

// Classes
export const get_classes = async (_: any, args: {page: number, name: string}) => {
  return await models.Class.find(args.name ? { name: new RegExp(args.name, 'i') } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
}
export const get_class = async (_: any, args: { _id: String }) => {
  return await models.Class.findById(args._id);
}

// ClassInstance
export const get_class_instances = async (_: any, args: {page: number}) => {
  return await models.ClassInstance.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_class_instance = async (_: any, args: { _id: String }) => {
  return await models.ClassInstance.findById(args._id);
}

// ClassInstancesModulesSchedules
export const get_class_instances_modules_schedules = async (_: any, args: {page: number}) => {
  return await models.ClassInstancesModulesSchedules.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_class_instance_module_schedule = async (_: any, args: {_id: String}) => {
  return await models.ClassInstancesModulesSchedules.findById(args._id);
}

// ClassModule
export const get_class_modules = async (_: any, args: {page: number, classId: String}) => {
  return await models.ClassModule.find(args.classId ? { classId: args.classId } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
}
export const get_class_module = async (_: any, args: { _id: String }) => {
  return await models.ClassModule.findById(args._id);
}

// ClassSchedule
export const get_class_schedules = async (_: any, args: {page: number}) => {
  return await models.ClassSchedule.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
} 

export const get_class_schedule = async (_: any, args: { _id: String }) => {
  return await models.ClassSchedule.findById(args._id);
}

// Classwork
export const get_classworks = async (_: any, args: {page: number}) => {
  return await models.Classwork.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_classwork = async (_: any, args: { _id: String }) => {
  return await models.Classwork.findById(args._id);
}

// Faculty
export const get_faculties = async (_: any, args: {page: number}) => {
  return await models.Faculty.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_faculty = async (_: any, args: { _id: String }) => {
  return await models.Faculty.findById(args._id);
}

// Notification
export const get_notifications = async (_: any, args: {page: number}, context: DecodedTokenPayloadType) => {
  // fetch users notifications
  const dataList = await models.Notification.find({ownerId: context.user.sub}).skip(args.page -1 ).limit(10).sort({ seen: 1, createdAt: -1 });
  // update all unseen notifications to seen
  await models.Notification.updateMany({ownerId: context.user.sub, seen: false}, {seen: true})
  return dataList;
}

export const get_notification = async (_: any, args: { _id: String }) => {
  return await models.Notification.findById(args._id);
}

// NotificationType
export const get_notification_types = async (_: any, args: {page: number}) => {
  return await models.NotificationType.find({}).skip((args.page -1 ) * mLimit).limit(mLimit);
}

export const get_notification_type = async (_: any, args: { _id: String }) => {
  return await models.NotificationType.findById(args._id);
}

// Role
export const get_roles = async (_: any, args: {page: number}) => {
  return await models.Role.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_role = async (_: any, args: { _id: String }) => {
  return await models.Role.findById(args._id);
}

// User
export const get_users = async (_: any, args: {page: number, name: string}) => {
  return await models.User.find(args.name ? { name: new RegExp(args.name, 'i') } : {}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_user = async (_: any, args: { _id: String }) => {
  return await models.User.findById(args._id);
}

// UsersClassesRoles
export const get_users_classes_roles = async (_: any, args: {page: number}) => {
  return await models.UsersClassesRoles.find({}).skip((args.page - 1) * mLimit).limit(mLimit);
}

export const get_user_class_role = async (_: any, args: { _id: String }) => {
  return await models.UsersClassesRoles.findById(args._id);
}

// UsersFacultiesRoles
export const get_users_faculties_roles = async (_: any, args: {page: number}) => {
  return await models.UsersFacultiesRoles.find({}).skip(args.page - 1).limit(10);
}

export const get_user_faculty_role = async (_: any, args: { _id: String }) => {
  return await models.UsersFacultiesRoles.findById(args._id);
}

// UsersRoles
export const get_users_roles = async (_: any, args: {page: number}) => {
  return await models.UsersRoles.find({}).skip(args.page - 1).limit(10);
}

export const get_user_role = async (_: any, args: { _id: String }) => {
  return await models.UsersRoles.findById(args._id);
}