import { checkBoxesController } from "../frontSrc/customCheckbox/controller.js";
import { product as productController } from "../frontSrc/inStockProducts/controller.js";
import { sizesLogosController } from "../frontSrc/sizeLogos/controller.js";
import { exampleProductController } from "../frontSrc/exampleProducts/controller.js";
import { getAllProducts, getCategory, getProductsByType } from "./services/apiRequests.js";



//Run products in stock section

let productsInStockPromise = getAllProducts();
productsInStockPromise
    .then(response => response.data.forEach(data => {
        let product = new productController(data);
    }))
    .catch(err => console.log(err));



//Run products examples section

let checkBoxController = new checkBoxesController(updateSizesSection);
document.querySelector("label[for=cat-tazas] .checkbox").click();

function updateSizesSection(type) {
    let sizesImagesPromise = getCategory(type);
    sizesImagesPromise
        .then(response => response.data.forEach(data => {
            let sizesLogos = new sizesLogosController(data);
        }))
        .catch(e => console.log(e));


    let productsByTypePromise = getProductsByType(type);
    productsByTypePromise
        .then(response => {
            exampleProductController.resetExampleContainer();
            response.data.forEach(data => {
                let productExamples = new exampleProductController(data);
            });
        })
        .catch(e => console.log(e));
}

