import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/RDL');
        console.log("Connected successfully");
    } catch (err) {
        console.error(err);
    }
}

connection();

export default connection;