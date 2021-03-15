import express from "express";
import { config } from "dotenv";
import products from "./data/products.js";
const app = express(),
  log = console.log;
config();

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const { PORT, NODE_ENV } = process.env;
app.listen(PORT, log(`Server running in ${NODE_ENV} mode on port ${PORT}}`));
