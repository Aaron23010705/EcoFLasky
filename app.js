import express from "express";
import clientsRoutes from "./src/sources/clients.js"
import ProductsRoutes from "./src/sources/products.js"

const app = express();
app.use (express.json());

app.use("/api/clients", clientsRoutes)
app.use("/api/products", ProductsRoutes)
export default app;    
