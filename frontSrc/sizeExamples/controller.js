import { product as productModel } from "./model.js";
import { product as productView } from "./view.js";

export class products {

    constructor(productData) {
        this.model = new productModel(productData);
        this.view = new productView();
    }

    addEvents() {

    }
}
