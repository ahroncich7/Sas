import { getProductsInStock } from "../../src/services/apiRequests.js";
import { product as productModel } from "./model.js";
import { product as productView } from "./view.js";

export class product {

    constructor() {

    }

    addEvents() {

    }


    getProductInStock(){
        let prod = getProductsInStock();
        return prod;
    }

    async updateProductsInStock() {
        
        let productPromise = await this.getProductInStock();
        let productList = productPromise.data;   
        console.log(productList);

        productList.forEach(productData => {
            let prod = new productModel(productData);
            let prodView = new productView(prod);
            productView.productsElement.insertAdjacentHTML("beforeend", prodView.card);
        });
    }


}