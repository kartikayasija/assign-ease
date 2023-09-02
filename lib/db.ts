import mongoose, { ConnectOptions } from "mongoose";

interface connection extends ConnectOptions{
  useNewUrlParser: Boolean
  useUnifiedTopology: Boolean
}

export async function connectDB() {
  try {
    const options: connection = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.MONGO_URL!, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
