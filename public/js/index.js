import { getProducts } from "../services/productsHandler.js";


// Carga en segundo plano las peticiones a API.
async function chargeProducts() {
    let products = await getProducts();
    let imgList = [];
    products.data.forEach(product => {
        imgList.push(product.img);
    });
    caches.open("imagenes").then(
        (cache) => {
            cache.addAll(imgList);
        }
    ).catch((e) => console.log(e));
}

chargeProducts();

document.getElementById("promo-button").addEventListener("click", (oEvent) => {
    oEvent.target.parentElement.parentElement.parentElement.classList.add("ocult");
});