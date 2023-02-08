import { exampleProduct as productModel } from "./model.js";
import { exampleProduct as productView } from "./view.js";

export class exampleProductController {

    static resetExampleContainer() {
        productView.productsListContainer.innerHTML = " ";
    }

    constructor(productData) {
        this.model = new productModel(productData);
        this.view = new productView(this.model);
        this.addEvents();
    }

    addEvents() {
    }
}
