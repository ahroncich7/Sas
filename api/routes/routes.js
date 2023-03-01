const express = require("express");
const adminController = require("../controllers/admin.js");
const routes = express.Router();
const productController = require("../controllers/product.js");
const { autenticateAdmin } = require("../middleware/auth.js");




routes.get("/admin", autenticateAdmin, adminController.sendAdmin);

routes.get("/login", adminController.sendLogin);

routes.get("/listByType", productController.listByType);

routes.get("/listCategory", productController.getCategory);

routes.post("/insertProduct", productController.insertNewProduct);

routes.delete("/deleteProduct", productController.deleteProduct);

routes.get("/listAll", productController.listAll);

routes.get("/listInStock", productController.listProductsInStock);

routes.put("/updateProduct", productController.updateProduct);

// routes.get("/listFilteredProducts", );

module.exports = routes;