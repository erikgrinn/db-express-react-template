const path = require("node:path");
const { Router } = require("express");
const { signUpPost } = require("../controllers/signUpController");

const signUpRouter = Router();

signUpRouter.post("/", signUpPost);

module.exports = signUpRouter;
