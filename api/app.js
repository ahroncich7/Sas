const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");
const PORT = 8091;
// SETTINGS
app.listen(PORT, () => {
	console.log(`Server corriendo en puerto ${PORT}`);
});

app.use(express.static("../"));
app.use(express.static("./"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors())


// ROUTES
app.use("/", routes);