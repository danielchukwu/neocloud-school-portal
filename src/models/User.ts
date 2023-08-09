import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

// (){} : ! # _ => ""
const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'name field is required'], trim: true, maxLength: [30, 'name must be less than 30 characters'] },
  email: { type: String, required: [true, 'email field is required'], trim: true, maxLength: [50, 'email must be less than 50 characters'], unique: true, validate: [validator.isEmail, 'enter a valid email'] },
  avatar: { type: String, trim: true, maxLength: [200, 'avatar string must be less than 200 characters'] },
  cover: { type: String, trim: true, maxLength: [200, 'cover string must be less than 50 characters'] },
  bio: { type: String, required: true, trim: true, maxLength: [500, 'bio must be less than 500 characters'], default: 'Ready to connect'},
  phone: { type: String, required: false, trim: true, maxLength: [25, 'phone should be less than 25 characters'], minLength: [10, 'phone number should be more than 9 characters'] },
  password: { type: String, required: [true, 'password field is required'], trim: true, validate: [validator.isStrongPassword, 'Password must include at least 1 uppercase, 1 lowercase, and 1 special character and should be a minimum of 6 characters'] },
  roleId: { type: mongoose.Types.ObjectId, ref: 'Role', maxLength: 50 },
}, { timestamps: true });

interface UserDocument extends mongoose.Document {}

interface UserModel extends mongoose.Model<UserDocument> {
  login(email: string, password: string): Promise<this>;
}

UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(`${this.password}`, salt);
  next();
});

UserSchema.statics.login = async function(email: string, password: string) {
  const user = await this.findOne({ email });
  if (user) {
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (passwordMatches) return user;
    throw new Error('incorrect password');
  }
  throw new Error('email does not exist');
};



const userModel = mongoose.model<UserDocument, UserModel>('User', UserSchema);

export default userModel;