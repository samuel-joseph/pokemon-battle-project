const { Router } = require("express");
const defaultRouter = Router();

defaultRouter.get("/", async (req, res) => {
  res.json({ test: "Router" });
});

defaultRouter.get("/favicon.ico", (req, res) => res.status(204));

module.exports = defaultRouter;
