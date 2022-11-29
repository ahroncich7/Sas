const express = require("express")
const { reset } = require("nodemon")
const routes = express.Router()
const productsController = require("../controllers/productsController.js")


routes.get("/listByType", (req,res) => {
    let response = productsController.listByType(req.query.type)
    response.then((response) => res.send(response))

})

routes.get("/saveNewProduct", (req,res) => {
    console.log(Object.values(req.query))
    // console.log(JSON.parse(req.query))
    let response = productsController.insertNewProduct(req.query)
    response.then((response) => res.send(response))
})

routes.get("/listFilteredProducts", (req,res) => {
    res.send("")
})


module.exports = routes