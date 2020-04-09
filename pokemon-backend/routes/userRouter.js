const { Router } = require("express");
const { User } = require("../models");

const {
  hashPassword,
  genToken,
  checkPassword,
  restrict
} = require("../services/auth");

const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
  };

  const token = genToken(userData);

  return {
    user: userData,
    token,
  };
};

userRouter.post("/register", async (req, res, next) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username } = req.body;
    const user = await User.create({
      username,
      password_digest,
    });

    const respData = buildAuthResponse(user);
    res.json(respData);
  } catch (e) {
    next(e);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.status(401).send("Fuck Off.... Wrong data");
    }
  } catch (e) {
    next(e);
  }
});

userRouter.get("/verify", restrict, (req, res) => {
  const user = res.locals.user;
  res.json(user);
});

userRouter.get("/all", async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

userRouter.get("/champion", async (req, res) => {
  const user = await User.findAll({ where: { rank: "champion" } });
  res.json(user);
});

// pokemonRouter.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const pokemon = await Pokemon.findByPk(id);
//   res.json({ pokemon });
// });
userRouter.put("/:id/", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const user = await User.findByPk(id);
  await user.update(data);
  res.json(user);
});

module.exports = userRouter;
