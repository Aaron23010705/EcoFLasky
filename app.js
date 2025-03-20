import express from "express";
import SupplierRoutes from "./src/sources/SupplierRoutes.js"
import CategoryRoutes from "./src/sources/CategoryRoutes.js"
import desingRouter from "./src/sources/desingRouter.js"


const app = express();
app.use (express.json());

app.use("/api/supplier", SupplierRoutes)
app.use("/api/category", CategoryRoutes)
app.use("/api/desings", desingRouter)

export default app;    
