import { app } from "./src/app.js";
import { connect_DB } from "./src/DB/db.connect.js";
import dotenv from "dotenv";
dotenv.config();

if (process.env.PORT && process.env.MONGO_DB) {
  connect_DB(process.env.MONGO_DB);
  app.listen(process.env.PORT, () => {
    console.log(`app is litensing on ${process.env.PORT}`);
  });
} else {
  console.log(`something wrong with dotenv file`)
  process.exit(1)
}
