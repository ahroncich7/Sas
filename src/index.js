import { product as productController } from "../frontSrc/inStockProducts/controller.js";
import { getAllProducts } from "./services/apiRequests.js";

let productsInStockPromise = getAllProducts();
productsInStockPromise
    .then(response => response.data.forEach(data => {
        let product = new productController(data);
    }))
    .catch(err => console.log(err));



