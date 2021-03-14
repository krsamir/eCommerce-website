const express = require("express");
const app = express(),
  log = console.log,
  products = require("./data/products");

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
app.listen(5000, log("Server running on port 5000"));
