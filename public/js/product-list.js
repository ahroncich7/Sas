import { getProducts } from "../services/productsHandler.js";
import { searchHandler } from "../services/reusableHandlers.js";

//Limpia contenedor de los productos
let productsList = document.getElementById("products-list");
productsList.innerHTML = "";

//Carga los prod
let productsPromise = getProducts();

productsPromise
    .then((products) => {
        products.data.forEach(product => {
            if (product.cat_id2 != 8) {
                let message = `https://wa.me/+543548434942?text=Hola,%20me%20interesa%20el%20producto%20${product.titulo}%20id:%20${product.prod_id}`;
                productsList.innerHTML += `<div id = ${product.prod_id} class="product ocult-filtered custom-card cat-${product.nombre_cat} ${product.stock == 1 ? "stock" : "no-stock ocult-no-stock"}">
                                        <div class="card-img">
                                            <img id = img-${product.prod_id} src="${product.img}" alt="${product.titulo}"></img>
                                            <a href="${message}" target="_blank" class="call-to-action-small"><h3>CONSULTAR</h3></a>
                                        </div>
                                        <div class="product-card-desc">
                                                
                                            <h4 class="product-title">${product.titulo.toUpperCase()}</h4>
                                                
                                            <h5 class="product-price">$${product.precio}</h5>
                                            
                                        </div>
                                    </div>`;
            }
        });
        const tazasLiElement = document.querySelector("#Tazas");
        tazasLiElement.click();

    });


// Aplica funcionalidad al filtro de productos en stock
const checkboxInStock = document.getElementById("in-stock");
checkboxInStock.addEventListener("click", () => {
    let productsNoInStock = document.querySelectorAll(".no-stock");
    productsNoInStock.forEach(product => product.classList.toggle("ocult-no-stock"));
});


// Aplica funcionalidad al filtro de categorías
const checkboxes = document.querySelectorAll(".filter input");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        let cat = e.target.id;
        let productsInCat = document.querySelectorAll(`.cat-${cat}`);
        productsInCat.forEach(product => product.classList.toggle("ocult-filtered"));
    });
});


// Aplica funcionalidad a los items del filtro

const filterList = document.querySelectorAll(".filter li");

filterList.forEach((el) => {
    el.addEventListener("click", listHandle);
});

function listHandle(oEvent) {

    let selectedElement = oEvent.target;
    filterList.forEach((li) => {
        try {
            li.classList.remove("selected-li-filter");
        } catch {
            undefined;
        }
    });
    selectedElement.classList.toggle("selected-li-filter");
    let cat = selectedElement.id;
    let products = document.querySelectorAll(".product");
    products.forEach(prod => {
        if (prod.classList.contains(`cat-${cat}`)) {
            try {

                prod.classList.remove("ocult-filtered");
            } catch {
                undefined;
            }
        } else {
            try {

                prod.classList.add("ocult-filtered");
            } catch {
                undefined;
            }
        }
    });
}





//Eventos

document.getElementById("search").addEventListener("input", searchHandler);

