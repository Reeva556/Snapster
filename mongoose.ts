import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

// export const connectToDB = async () => {
//   // Set strict query mode for Mongoose to prevent unknown field queries.
//   mongoose.set("strictQuery", true);

//   if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");

//   // If the connection is already established, return without creating a new connection.
//   if (isConnected) {
//     console.log("MongoDB connection already established");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URL);

//     isConnected = true; // Set the connection status to true
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
export const connectToDB = async () => {
  if (!process.env.MONGODB_URL) {
    console.log("Missing MongoDB URL");
    return;
  }

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
