import { createUser, findUser, getUsers } from "./userModel";

const createAndVerifyUser = async (user) => {
  const existingUser = (await findUser(user.id)) ?? await createUser(user);
  console.log("User found or created:", existingUser);
  if (existingUser.createdAt === null) {
    throw Error("Created at null for user.");
  }
};

const verifyUserExistsInUsers = async (user) => {
  const existingUsers = await getUsers();
  console.log("Read all users", existingUsers);
  if (existingUsers.length !== 1) {
    throw Error("Could not read users.");
  }
  if (existingUsers[0].id != user.id) {
    throw Error("Created user not found in all users.");
  }
};

export const testCreateAndReadUsers = async () => {
  const newUser = {
    id: 123,
    name: "New User",
    email: "newuser@email.com",
    active: true,
  };

  await createAndVerifyUser(newUser);
  await verifyUserExistsInUsers(newUser);

  console.log("Tests successful!");
};
