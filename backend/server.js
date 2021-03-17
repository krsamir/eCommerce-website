import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const app = express(),
  log = console.log;
config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
const { PORT, NODE_ENV } = process.env;
app.listen(PORT, log(`Server running in ${NODE_ENV} mode on port ${PORT}`));
