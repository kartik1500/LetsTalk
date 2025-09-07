import mongoose from "mongoose";

const URL = process.env.MONGODB_URI;
console.log(URL);

//Function to connect to the mongodb database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    await mongoose.connect(`${URL}/chat-app`);
  } catch (error) {}
};
