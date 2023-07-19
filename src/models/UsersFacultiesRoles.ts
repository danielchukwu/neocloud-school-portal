import mongoose from "mongoose";

// (){} : ! # _ => ""
const UsersFacultiesRolesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, max: 50 },
  facultiesId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, trim: true, max: 50 },
  roleId: { type: mongoose.Types.ObjectId, ref: 'Role', required: true, trim: true, max: 50 },  // Users roleId
});

const UsersFacultiesRolesModel = mongoose.model('UsersFacultiesRoles', UsersFacultiesRolesSchema);

export default UsersFacultiesRolesModel;