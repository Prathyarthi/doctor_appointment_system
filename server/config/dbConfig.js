import mongoose from 'mongoose'
import { config } from "dotenv";
config()

const connectToDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("Connect to DB!");
            })
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB