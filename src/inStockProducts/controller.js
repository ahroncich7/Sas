import { product as productModel } from "./model.js";
import { product as productView } from "./view.js";

export class product {

    constructor(productData) {
        this.model = new productModel(productData);
        this.view = new productView(this.model);
        this.addEvents();
    }

    addEvents() {
        let imgEl = this.view.productElement.querySelector("img");
        imgEl.addEventListener("error", () => {
            imgEl.src = productView.defaultImg;
        });
    }
}
