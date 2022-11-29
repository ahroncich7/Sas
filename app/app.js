const express = require("express")
const app = express()
const routes = require("./routes/routes")

// SETTINGS
app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000")
})

app.use(express.static("./"))

// ROUTES
app.use("/", routes)