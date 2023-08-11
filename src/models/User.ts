import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

// (){} : ! # _ => ""
const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name field is required'], trim: true, maxLength: [30, 'Name must be less than 30 characters'] },
  email: { type: String, required: [true, 'Email field is required'], trim: true, maxLength: [50, 'Email must be less than 50 characters'], unique: true, validate: [validator.isEmail, 'Enter a valid email'] },
  avatar: { type: String, trim: true, maxLength: [200, 'Avatar string must be less than 200 characters'] },
  cover: { type: String, trim: true, maxLength: [200, 'Cover string must be less than 50 characters'] },
  bio: { type: String, required: true, trim: true, maxLength: [500, 'Bio must be less than 500 characters'], default: 'Ready to connect'},
  phone: { type: String, required: false, trim: true, maxLength: [25, 'Phone should be less than 25 characters'], minLength: [10, 'Phone number should be more than 9 characters'] },
  password: { type: String, required: [true, 'Password field is required'], trim: true, validate: [validator.isStrongPassword, 'Password must include at least 1 uppercase, 1 lowercase, and 1 special character and should be a minimum of 6 characters'] },
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
    throw new Error('Incorrect password!');
  }
  throw new Error("The email doesn't exist!");
};



const userModel = mongoose.model<UserDocument, UserModel>('User', UserSchema);

export default userModel;