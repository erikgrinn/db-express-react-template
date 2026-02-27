const path = require("node:path");
const { Router } = require("express");
const { getUsers } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getUsers);

module.exports = indexRouter;
