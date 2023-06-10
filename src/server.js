import mongoose from 'mongoose';
import readlineSync from 'readline-sync';

const password = (query) => {
  return readlineSync.question(query, {
    hideEchoBack: true
  });
};

const question = (query) => {
  return readlineSync.question(query, {
    hideEchoBack: false
  });
};

const connectToMongo = async () => {
  try {
    console.log('Connecting to Mongo!');

    const user = question('Enter username or blank for default: ') || 'admin';
    const pass = password('Enter password or blank for default: ') || '1234';
    const server = question('Enter server or blank for default: ') || 'localhost';

    const connection = `mongodb://${user}:${pass}@${server}:27017/api?authSource=admin`;

    mongoose.set('strictQuery', false);
    await mongoose.connect(connection);

    console.log('Connected to Mongo!');
  } catch (error) {
    console.log('Cannot connect to the database!', error);
    process.exit();
  }
};

connectToMongo();
