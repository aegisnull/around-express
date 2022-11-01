const express = require("express");

const { PORT = 3000 } = process.env;
const app = express();

//const userRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/", cardRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// set route for http://localhost:3000/users
app.get("/users", (req, res) => {
  res.json(require("./data/users.json"));
});

// set route for http://localhost:3000/users/8340d0ec33270a25f2413b69 and show only that _id if id does not match, API should send JSON: { "message": "ID de usuario no encontrado" }
app.get("/users/:_id", (req, res) => {
  const { _id } = req.params;
  const user = require("./data/users.json").find((user) => user._id === _id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "ID de usuario no encontrado" });
  }
});

// set route for Non-existent address or localhost:3000
app.use("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
