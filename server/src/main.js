const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(cors());

app.get("/pizzas", (_req, res) => {
  fs.readFile(
    path.join(__dirname, "pizzas.json"),
    { encoding: "utf-8" },
    (err, data) => {
      if (!err) {
        res.json(JSON.parse(data));
      } else {
        res.json({ status: "fail", message: err.message });
      }
    }
  );
});

app.all("/*", (_, res) => {
  res.json({ status: "fail", message: "нихуя тут нет" });
});

app.listen(2323, () => {
  console.log("app started in 2323 port http://localhost:2323/");
});
