import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Users = model("User", UserSchema);

const createUser = async (user) => {
  return await Users.create(user);
};

const findUser = async (id) => {
  const users = await Users.find({ id });
  return users.length === 1 ? users[0] : null;
};

const getUsers = () => {
  return Users.find({});
};

module.exports = {
  createUser,
  findUser,
  getUsers,
};
