// Dependencias
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("./config");

const app = express();

// Importar rutas
const indexRoutes = require("./routes/routeindex");

// Configuraciones
app.set("port", config.app.port);
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", "views");
app.set("view engine", "ejs");

// Middleware  
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/", indexRoutes);

// Listener
app.listen(app.get("port"), () => {
    console.log(`Server on port: ${app.get("port")}`);
});