// https://www.youtube.com/watch?v=iA0wZehe82w

require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "It's alive",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Aplicação rodando.");
});
