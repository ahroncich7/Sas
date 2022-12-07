const { urlencoded } = require("express")
const express = require("express")
const app = express()
const routes = require("./routes/routes")
const cors = require("cors")

// SETTINGS
app.listen(8091, () => {
    console.log("Server corriendo en puerto 3000")
})

app.use(express.static("../"))
app.use(express.static("./"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(cors())


// ROUTES
app.use("/", routes)