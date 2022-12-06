const express = require("express")
const routes = express.Router()
const productsController = require("../controllers/productsController.js")

routes.get("/listByType", (req, res) => {
    productsController.listByType(req, res)
})

routes.post("/insertProduct", (req, res) => {
    productsController.insertNewProduct(req, res)
})

routes.get("/listFilteredProducts", (req, res) => {
})

routes.delete("/deleteProduct", (req, res) => {
    productsController.deleteProduct(req, res)
})

routes.get("/listAll", (req, res) => {
    productsController.listAll(req, res)
})

routes.get("/listInStock", (req, res) => {
    productsController.listProductsInStock(req, res)
})

routes.put("/updateProduct", (req, res) => {
        productsController.updateProduct(req, res)
    })

module.exports = routes