import mongoose from "mongoose";

 export const connect_DB = (DB_string) => {
    try {
        mongoose.connect(DB_string,() => {
            console.log(`connected to ${DB_string}`);
        })
    } catch (error) {
        console.log(`db connection error occured, error: ${error.message}`)
    }
}
