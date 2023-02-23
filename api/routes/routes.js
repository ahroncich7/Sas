const express = require("express");
const routes = express.Router();
const productController = require("../controllers/product.js");
const path = require("path");





routes.get("/admin", (req, res) => {
    res.sendFile(path.resolve("admin.html"));
});

routes.get("/", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

routes.get("/login");

routes.get("/listByType", productController.listByType);

routes.get("/listCategory", productController.getCategory);

routes.post("/insertProduct", productController.insertNewProduct);

routes.delete("/deleteProduct", productController.deleteProduct);

routes.get("/listAll", productController.listAll);

routes.get("/listInStock", productController.listProductsInStock);

routes.put("/updateProduct", productController.updateProduct);

// routes.get("/listFilteredProducts", );

module.exports = routes;