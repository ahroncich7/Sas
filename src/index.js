import { checkBoxesController } from "./customCheckbox/controller.js";
import { product as productController } from "./inStockProducts/controller.js";
import { sizesLogosController } from "./sizeLogos/controller.js";
import { exampleProductController } from "./exampleProducts/controller.js";
import { artObject } from "./artProducts/controller.js";
import { getAllProducts, getCategory, getProductsByType, getProductsInStock } from "./services/apiRequests.js";



//Run products in stock section

let productsInStockPromise = getProductsInStock();
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
    console.log(productsByTypePromise);
    productsByTypePromise
        .then(response => {
            exampleProductController.resetExampleContainer();
            response.data.forEach(data => {
                let productExamples = new exampleProductController(data);
            });
        })
        .catch(e => console.log(e));
}


//Run art section


document.getElementById("art-cont").innerHTML = "";
let artObjectPromise = getProductsByType("teteras");
artObjectPromise
    .then(response => response.data.forEach(data => {
        let artObjectController = new artObject(data);
    }))
    .catch(e => console.log(e));

