import express from "express";
import SupplierRoutes from "./src/sources/SupplierRoutes.js"
import CategoryRoutes from "./src/sources/CategoryRoutes.js"
import desingRouter from "./src/sources/desingRouter.js"
import clientsRoutes from "./src/sources/clients.js"
import RatingRoutes from "./src/sources/ratings.js"
import ProductsRoutes from "./src/sources/products.js"
import FavoriteRoute from "./src/sources/favorites.js"

const app = express();
app.use (express.json());

app.use("/api/clients", clientsRoutes)
app.use("/api/ratings", RatingRoutes)
app.use("/api/products", ProductsRoutes)
app.use("/api/favorites", FavoriteRoute)
app.use("/api/supplier", SupplierRoutes)
app.use("/api/category", CategoryRoutes)
app.use("/api/desings", desingRouter)
export default app;    
