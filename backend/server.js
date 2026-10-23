import { app } from "./src/app.js";
import { connect_DB } from "./src/DB/db.connect.js";
app.listen(3000, () => {
    console.log(`app is litensing on ${3000}`)
})