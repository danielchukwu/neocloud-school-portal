import jwt from 'jsonwebtoken';
import { GraphQLError } from "graphql";
import Role from '../models/Role';

export const createJWT = async (user: any) => {
  const role = await Role.findById(user.roleId);
  return jwt.sign(
    {role: role ? role.name : ''},
    `${process.env.SECRET_KEY}`,
    {algorithm: 'HS256', subject: `${user._id}`, expiresIn: '1h'}
  )
};

export const decodeToken = (token: string) => {
  try {
    const user = jwt.verify(token, `${process.env.SECRET_KEY}`)
    return user;
  } catch (err: any) {
    throw new GraphQLError(err.message);
  }
}