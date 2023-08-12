import mongoose from "mongoose";

type _idType = typeof mongoose.Types.ObjectId;
// 
export interface UserType {id: _idType, name: string, email: string, avatar: string, cover: string, bio: string, phone: string, password: string, roleId: _idType}
