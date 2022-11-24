
//IMPORTS
const express = require("express")
const path = require("path")
const app = express()
const routes = require("./routes/index")
const { engine } = require("express-handlebars")
const PORT = 8080
//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join( __dirname, "/public")))
app.use("/api/productos", routes)

//Renderiza la plantilla principal
app.get("/", (req, res) => {
    res.render("index")
})

//ENGINE
app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "/views"))
//SERVER LISTEN
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server escuchando puerto : ${PORT}`);
})

