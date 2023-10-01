import { getAllProducts } from "./apiRequest.js";

//Define tiempo de caducidad en milisegundos
const EXP = 300000; //5 min en milisegundos

export async function getProducts() {
    try {

        //Intenta encontrar los productos en local storage
        let products = getProductFromLocalStorage();
        //Verifica si los datos son muy viejos
        if (new Date() - new Date(products.date) > EXP) {
            console.log("Local Storage data has expired");
            throw Error;
        }
        console.log("Data obtained from LS");
        return products.data;
    } catch {

        //Busca los datos en la API
        let products = await getProductsFromApi();

        //Guarda productos en local storage
        saveProductsInLocalStorage(products);
        console.log("data obtained from API");
        return products;
    }
}


function getProductFromLocalStorage() {
    let productsFromLS = JSON.parse(localStorage.getItem("products"));
    return productsFromLS;
}


function getProductsFromApi() {
    let productsFromAPI = getAllProducts();
    return productsFromAPI;
}


function saveProductsInLocalStorage(products) {
    let date = new Date();
    const dataObject = { date: date, data: products };
    localStorage.setItem("products", JSON.stringify(dataObject));
}