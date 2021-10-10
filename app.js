const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/facts", (req, res) => {
  res.json(data);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${8000}`);
});
