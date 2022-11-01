const express = require("express");

const { PORT = 3000 } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// set route for GET http://localhost:3000/users
app.get("/users", (req, res) => {
  res.send("GET /users");
});

// set route for GET http://localhost:3000/cards
app.get("/cards", (req, res) => {
  res.send("GET /cards");
});

// set route for GET http://localhost:3000/users/8340d0ec33270a25f2413b69
app.get("/users/:userId", (req, res) => {
  res.send(`GET /users/${req.params.userId}`);
});

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
