require("dotenv").config();
const path = require("node:path");
const express = require("express");
const cors = require("cors");

const app = express();

const indexRouter = require("./routes/indexRouter");
const signUpRouter = require("./routes/signUpRouter");

const corsOptions = {
  origin: ["http://localhost:5173"], // vite
};

// cors is middleware
app.use(cors(corsOptions));

// use this to serve CSS (and others) if sending HTML with res.sendFile
// app.use(express.static(__dirname))

// for sending direct from form element
// app.use(express.urlencoded({ extended: true }));

// for using React states
app.use(express.json());

app.use("/sign-up", signUpRouter);
app.use("/", indexRouter);

// global error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Express app - listening on port ${PORT}!`);
});
