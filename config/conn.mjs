import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const connectionString = process.env.mongoURI;

async function connectDB() {
    try {
        //connect to db
        await mongoose.connect(connectionString);
        //console.log if connected
        console.log('Connected to MongoDB...');
    } catch (error) {
        console.error(error);
        process.exit(1); //stop allowing backdoor access to DB if connection fails
    }
}

export default connectDB;
