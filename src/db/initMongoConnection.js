import mongoose from 'mongoose';

export async function initMongoConnection() {
  const { MONGODB_URL } = process.env;

  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.error('Mongo connection failed:', err);
    process.exit(1);
  }
}