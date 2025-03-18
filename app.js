import express from "express";
import distributorRoute from "./src/sources/distributor.js"


const app = express();
app.use (express.json());

app.use("/api/distributors", distributorRoute);

export default app;    
