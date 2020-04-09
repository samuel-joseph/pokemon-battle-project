const express = require("express");
const PORT = process.env.PORT || 3001;

const userRouter = require("./routes/userRouter.js");
const pokemonRouter = require("./routes/pokemonRouter");
const moveRouter = require("./routes/moveRouter.js");
const defaultRouter = require("./routes/defaultRouter.js");

const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

// const http = require("http").createServer(app);

// http.listen;

// routes
app.use("/", defaultRouter);
app.use("/users", userRouter);
app.use("/pokemons", pokemonRouter);
app.use("/pokemons/:pokemonId/moves", moveRouter);

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`We're live at ${PORT}!`);
});
