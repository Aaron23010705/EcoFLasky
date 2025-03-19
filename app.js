import express from "express";
import distributorRoute from "./src/sources/distributor.js"
import movementsRoutes from "./src/sources/movemnts.js"
import shoppingCartRoutes from "./src/sources/shoppingCart.js"


const app = express();
app.use (express.json());

app.use("/api/distributors", distributorRoute);
app.use("/api/movements", movementsRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);

export default app;    
