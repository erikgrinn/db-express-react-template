#! /usr/bin/env node

// node will ignore shebang line if manually running
// (so not in terminal)
// remember it needs to be very first line
require("dotenv").config();

const { Client } = require("pg");
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const SQL = `SELECT * FROM users;
`;

async function seed() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/auth_db`,
  });
  await client.connect();
  const result = await client.query(SQL);
  console.log(result.rows); // undefined for all but SELECT
  await client.end();
  console.log("done");
}

seed();
