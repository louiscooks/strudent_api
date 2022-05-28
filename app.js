//env variables are more flexible when it comes to config;
require("dotenv").config();

const express = require("express");
const logger = require("./config/logger");
const db = require("./config/mysql");
const studentRoutes = require("./routes/students/index.js");

const app = express();

app.use(express.json());

db.connect((err) => {
	if (err) return logger.error(err.message);
	logger.info("database connected...");
});

app.use("/students", studentRoutes);
app.use("*", (req, res) => {
	res.status(404).send({ message: "Page not Found" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
	logger.info(`app listening on port ${port}`);
});
