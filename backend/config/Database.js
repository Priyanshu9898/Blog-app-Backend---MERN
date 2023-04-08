import mongoose from "mongoose";


// Function for Connecting to the database
export const connectDB = async() => {
    
    const db = process.env.MONGO_URL

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}