//--------------------------- debug
global.__rootDir = __dirname;
//--------------------------- /debug

require("./db");
const express = require("express");
const app = express();
const PORT = 4242;
const morgan = require("morgan");

const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, console.log(`Node server is listening to port ${PORT}`));

