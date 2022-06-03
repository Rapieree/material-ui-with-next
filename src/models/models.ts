import {model, Schema, models} from "mongoose";
import {IUser} from "../utils/types";
import {userSchema} from "./user";

const createMongoModel = <Type>(name, schema) => {
  return models[name] || model<Type>(name, new Schema<Type>(schema));
};

const User = createMongoModel<IUser>(`user`, userSchema);

export {
  User,
};
