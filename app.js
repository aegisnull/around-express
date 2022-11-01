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

// set route for GET http://localhost:3000/users/8340d0ec33270a25f2413b69 if id does not match, API should send JSON: { "message": "ID de usuario no encontrado" }
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  if (id === "8340d0ec33270a25f2413b69") {
    res.send("GET /users/8340d0ec33270a25f2413b69");
  } else {
    res.status(404).send({ message: "ID de usuario no encontrado" });
  }
});

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
