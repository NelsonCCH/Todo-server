require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const todo = require("./routes/todo");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

// welcome route for testing
app.get("/", (req, res) => res.send("Server is up running!"));

// applying the routes in todo
app.use("/api/todo", todo);

app.listen(3001, () => console.log("server listening for port 3001"));
