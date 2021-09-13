// Dependencias
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("./config");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));


// Importar rutas
const indexRoutes = require("./routes/routeindex");

// Middleware  
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/", indexRoutes);

// Listener
const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });