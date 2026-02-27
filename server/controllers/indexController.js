const pool = require("../db/pool");
const path = require("node:path");

async function getUsers(req, res) {
  try {
    const { rows: users } = await pool.query("SELECT * FROM users");
    console.log("Users: ", users);
    res.send({ users });
  } catch (error) {
    console.error("Error fetching:", error);
    res.status(500).json({
      error: "Error fetching",
      details: error.message,
    });
  }
}

module.exports = {
  getUsers,
};
