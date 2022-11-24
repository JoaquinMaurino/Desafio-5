
//IMPORTS
const express = require("express")
const path = require("path")
const app = express()
const routes = require("./routes/index")
const PORT = 8080

//Renderiza plantilla principal
app.get("/", (req, res)=>{
    res.render("index")
})

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join( __dirname, "/public")))
app.use("/api/productos", routes)
//ENGINE
app.set("views", path.join(__dirname, "/public/views"))
app.set("view engine", "pug")
//SERVER LISTEN
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server escuchando puerto : ${PORT}`);
})