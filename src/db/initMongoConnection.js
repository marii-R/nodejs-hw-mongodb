import mongoose from 'mongoose';

export async function initMongoConnection() {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;

  const mongoURI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoURI);
    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.error('Mongo connection failed:', err.message);
    process.exit(1);
  }
}