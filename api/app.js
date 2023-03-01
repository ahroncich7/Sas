require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const CONFIG = require("./config/config.js");
const cors = require("cors");


// SETTINGS
const app = express();

app.listen(CONFIG.PORT, () => {
    console.log(`Server corriendo en puerto ${CONFIG.PORT}`);
});

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// ROUTES
app.use("/", routes);