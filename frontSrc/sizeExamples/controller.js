import { getProductsInStock as getStockProductsApi } from "../../src/services/apiRequests.js";
import { product as productModel } from "./model.js";
import { product as productView } from "./view.js";

export class products {

    constructor() {

    }

    addEvents() {

    }


    getProductInStock(){
        let prod = getStockProductsApi();
        return prod;
    }

    async updateProductsInStock() {
        
        let productPromise = await this.getProductInStock();
        let productList = productPromise.data;   
        console.log(productList);

        productList.forEach(productData => {
            let product = new productModel(productData);
            let prodView = new productView(product);
            productView.productsElement.insertAdjacentHTML("beforeend", prodView.card);
        });
    }


}