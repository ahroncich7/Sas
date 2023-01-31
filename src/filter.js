import * as request from "./apiRequests.js";
import { productCard } from "./productCard.js";
import { sizesCard } from "./sizesCards.js";


let checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", setWhenClickedCheckbox);
});

function setWhenClickedCheckbox(e) {
    e.preventDefault();
    let checkbox = e.target;
    let type = checkbox.querySelector("input").value;
    resetActiveStatusInCheckboxes(checkboxes);
    setActiveStatusInCheckbox(checkbox);
    updateProductsByType(type);
    updateSizesByType(type);
}


function resetActiveStatusInCheckboxes(checkboxes) {
    checkboxes.forEach(checkbox => {
        try { checkbox.classList.remove("active"); }
        catch(e) { console.log(e);}
    });
}


function setActiveStatusInCheckbox(checkbox) {
    checkbox.classList.add("active");
}

function updateProductsByType(type) {
    const productsCont = document.getElementById("products-list");
    productsCont.innerHTML = " ";
    const productsPromise = request.getProductsByType(type);

    productsPromise.then((productsList) => {
        productsList.data.forEach(productData => {
            if (productData.stock) {
                const card = new productCard(productData, productsCont, "example");
                card.price = " ";
                card.btn = " ";
                card.updateCard();
            }
        });
    }).catch(e => console.log(e));
}

function updateSizesByType(type) {
    const sizesCont = document.getElementById("sizes-list");
    let sizesPromise = request.getCategory(type);
    sizesPromise.then((sizesData) => {
        const cards = new sizesCard(sizesData.data[0], sizesCont, " ");
    }).catch(e => console.log(e));
}

export {updateSizesByType, updateProductsByType};