const express = require("express");
const app = express();
const morgan = require("morgan");

const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(4242, console.log("server up"));

