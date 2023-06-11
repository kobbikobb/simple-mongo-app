import mongoose from "mongoose";
import readlineSync from "readline-sync";
import { testCreateAndReadUsers } from "./userTest";

const password = (query) => {
  return readlineSync.question(query, {
    hideEchoBack: true,
  });
};

const question = (query) => {
  return readlineSync.question(query, {
    hideEchoBack: false,
  });
};

const buildConnection = (user, pass, server) => {
  return `mongodb://${user}:${pass}@${server}:27017/api?authSource=admin`;
};

const defaultConnection = () => {
  const user = "admin";
  const pass = "1234";
  const server = "localhost";

  return buildConnection(user, pass, server);
};

const readConnectionFromInput = () => {
  const user = question("Enter username: ");
  const pass = password("Enter password: ");
  const server = question("Enter server: ");

  return buildConnection(user, pass, server);
};

const readConnectionFromUser = () => {
  const how = question(
    "How to connect: 1) full uri f.x: mongodb://localhost 2) input user, pass, server 3) default localhost? "
  );
  if (how === "1") {
    return question("Enter full uri to connect: ");
  }
  return how === "2" ? readConnectionFromInput() : defaultConnection();
};

const connectToMongo = async () => {
  try {
    console.log("Connecting to Mongo!");

    mongoose.set("strictQuery", false);

    await mongoose.connect(readConnectionFromUser());
        
    console.log("Connected to Mongo!");
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
};

(async () => {
  await connectToMongo();
  await testCreateAndReadUsers();
})();
