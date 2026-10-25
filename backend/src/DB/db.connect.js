import mongoose from "mongoose";

 export const connect_DB = async(DB_string) => {
    try {
        const { connection } = await mongoose.connect(DB_string);
        console.log(`database is connected to ${connection.host}`)
    } catch (error) {
        console.log(`error in database: ${error}`)
        process.exit(1)
    }
}
