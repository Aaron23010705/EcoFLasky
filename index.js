import app from "./app.js";
import "./database.js";
import { config } from "./src/config.js";


async function main(){
    //crear una constante del puerto paso 1
    app.listen(config.server.port);

    console.log("Server is running " + config.server.port); }

    main();