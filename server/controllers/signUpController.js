const pool = require("../db/pool");
const path = require("node:path");

async function signUpPost(req, res, next) {
  try {
    console.log(req.body);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [req.body.username, req.body.password]);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  signUpPost,
};
