const cardsRouter = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

const cardsPath = path.join(__dirname, "../data/cards.json");

cardsRouter.get("/cards", (req, res) => {
  fs.readFile(cardsPath, { encoding: "utf8" })
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});
