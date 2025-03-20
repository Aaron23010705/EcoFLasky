import express from "express";
import distributorRoute from "./src/sources/distributor.js"
import movementsRoutes from "./src/sources/movemnts.js"
import shoppingCartRoutes from "./src/sources/shoppingCart.js"
import SupplierRoutes from "./src/sources/SupplierRoutes.js"
import CategoryRoutes from "./src/sources/CategoryRoutes.js"
import desingRouter from "./src/sources/desingRouter.js"


const app = express();
app.use (express.json());

app.use("/api/distributors", distributorRoute);
app.use("/api/movements", movementsRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/supplier", SupplierRoutes)
app.use("/api/category", CategoryRoutes)
app.use("/api/desings", desingRouter)

export default app;    
