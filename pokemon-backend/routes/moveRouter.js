const { Router } = require("express");
//Merge Params gives us accesds to nested Parameters
//Preserve the req.params values from the parent router
//If the parent adn the child have conflicting param names.
//the child's value take the precedence
const moveRouter = Router({ mergeParams: true });
const { Move, Pokemon } = require("../models.js");

//index
moveRouter.get("/", async (req, res) => {
  const pokemonId = req.params.pokemonId;
  console.log(pokemonId);
  const moves = await Move.findAll({
    where: {
      pokemonId
    }
  });
  res.json({ moves });
});

//show  --> will be http://localhost:3000/speakers/:speakerId/quotes/:id
moveRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const move = await Move.findByPk(id);
    res.json({ move });
  } catch (e) {
    console.error(e.message);
    res.json(e.message);
  }
});

//create --> route will be http://localhost:3000/speakers/:speakerId/quotes
moveRouter.post("/", async (req, res) => {
  const pokemonId = req.params.pokemonId;
  const data = req.body;
  const pokemon = await Pokemon.findByPk(pokemonId);
  const move = await Move.create(data);
  await move.setPokemon(pokemon);
  res.json({ move });
});

//update
moveRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const move = await Move.findByPk(id);
  await move.update(data);
  res.json({ move });
});

delete moveRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const move = await Move.findByPk(id);
  await move.destroy();
  res.json({ move });
});

module.exports = moveRouter;
