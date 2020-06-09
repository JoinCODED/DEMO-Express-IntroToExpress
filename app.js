const express = require("express");
const cookies = require("./cookies");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/cookies", (req, res) => {
  res.json(cookies);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
