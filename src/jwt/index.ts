import jwt from 'jsonwebtoken';
import { GraphQLError } from "graphql";
import Role from '../models/Role';
import { handleError } from '../utils/errorHandler';
import { UserType } from '../types/model_types';
import userModel from '../models/User';

export const createJWT = async (user: any, expiresIn: string | number) => {
  const role = await Role.findById(user.roleId);
  return jwt.sign(
    {role: role?.name ?? ''},
    `${process.env.SECRET_KEY}`,
    {algorithm: 'HS256', subject: `${user._id}`, expiresIn: expiresIn}
  )
};

export const decodeToken = (token: string) => {
  try {
    const user = jwt.verify(token, `${process.env.SECRET_KEY}`)
    return user;
  } catch (err: any) {
    let errors = handleError(err);
    throw new GraphQLError(err.message, {extensions: { errors }});
  }
}

export const createAccessAndRefreshToken = async (user: UserType): Promise<{ access_token: string; refresh_token: string; }>  => {
  const access_token = await createJWT(user, '10s');  // 10seconds
  const refresh_token = await createJWT(user, '60d');

  return { access_token, refresh_token };
}