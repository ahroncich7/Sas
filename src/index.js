import * as request from "./apiRequests.js"
import { updateProductsByType, updateSizesByType } from "./filter.js";
import { productCard } from "./productCard.js";

const productsInStockCont = document.getElementById("products-in-stock")

updateInStockProducts()
updateSizesByType("Tazas")
updateProductsByType("Tazas")


function updateInStockProducts() {
    const productsPromise = request.getAllProducts()
    productsPromise.then((productsList) => {
        productsList.data.forEach(productData => {
            if (productData.stock) {
                const card = new productCard(productData, productsInStockCont, "stock")
                card.updateCard()
            }
        })
    }).catch(e => console.log(e))
}
