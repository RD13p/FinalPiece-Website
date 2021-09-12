// Dependencias
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const config = require("./config");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// Importar rutas
const indexRoutes = require("./routes/routeindex");

// Configuraciones
var PORT = process.env.PORT || 3000;



// Middleware  
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/", indexRoutes);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});