import { getProductsFromApi } from "./fakeStorage.js";

let sizesList = document.getElementById("sizes-list");
let productsList = document.getElementById("products-list");


export function updateProductsSection() {
    let type = document.querySelector(".filter .active input").value
    let productsOfType = getProductsByType(type);

    setSizesCards( sizesList, productsOfType.size );
    setProductCards( productsList, productsOfType.products );
}


function getProductsByType(type) {
    let productsByType;
    try { productsByType = getProductsFromLocalStorage(type) }
    catch { productsByType = getProductsFromApi(type) }

    return productsByType;
}

function setSizesCards(sizesList, sizeData) {
    sizesList.innerHTML = `<div class="size-card small">
                                <img src="${sizeData.img}" alt="${sizeData.small.title}">
                                <div class="size-desc">
                                    <h4>${sizeData.small.title}</h4>
                                    <span>${sizeData.small.price}</span>
                            </div>
                            </div>

                            <div class="size-card medium">
                                <img src="${sizeData.img}" alt="${sizeData.medium.title}">
                                <div class="size-desc">
                                <h4>${sizeData.medium.title}</h4>
                                <span>${sizeData.medium.price}</span>
                                </div>
                            </div>

                            <div class="size-card large">
                                <img src="${sizeData.img}" alt="${sizeData.large.title}">
                                <div class="size-desc">
                                    <h4>${sizeData.large.title}</h4>
                                    <span>${sizeData.large.price}</span>
                                </div>
                            </div>`
}

function setProductCards(productList, products) {
    productList.innerHTML = ""
    products.forEach((product) => {
        productList.innerHTML +=  createProductCard(product);
    });

};

function createProductCard(product) {
    let productCard = `<div class="product-card">
                        <img src="${product.img}" alt="${product.title}">
                        <div class="product-card-desc">
                            <h3 class="product-title">${product.title}</h3>
                            <span class="product-price">${""}</span>
                        </div>
                    </div>`

    return productCard;
}

