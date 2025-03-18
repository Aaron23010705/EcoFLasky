import express from "express";
import clientsRoutes from "./src/sources/clients.js"


const app = express();
app.use (express.json());

app.use("/api/clients", clientsRoutes)
export default app;    
