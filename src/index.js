import * as request from "./apiRequests.js"
import { artCard } from "./artCard.js";
import { updateProductsByType, updateSizesByType } from "./filter.js";
import { productCard } from "./productCard.js";

const productsInStockContainer = document.getElementById("products-in-stock")
const artContainer = document.getElementById("art-cont")

updateInStockProducts()
updateSizesByType("Tazas")
updateProductsByType("Tazas")
updateArtCards()


function updateInStockProducts() {
    const productsPromise = request.getAllProducts()
    productsPromise.then((productsList) => {
        productsList.data.forEach(productData => {
            if (productData.stock) {
                const card = new productCard(productData, productsInStockContainer, "stock")
                card.updateCard()
            }
        })
    }).catch(e => console.log(e))
}

function updateArtCards() {
    const productsPromise = request.getProductsByType("Arte")
    productsPromise.then((productsList) => {
        artContainer.innerHTML = " "
        productsList.data.forEach(productData => {
            if (productData.stock) {
                const card = new artCard(productData, artContainer, "stock")
                card.updateCard()
            }
        })
        artContainer.scrollLeft =  (artContainer.scrollWidth - artContainer.clientWidth ) / 2;
    }).catch(e => console.log(e))
}
