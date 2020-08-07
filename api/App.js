const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => res.send("Api running"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// app.get("/url", (req, res, next) => {
//   res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
// });
