import { artObject as artObjectModel } from "./model.js";
import { artObject as artObjectView } from "./view.js";

export class artObject {

    constructor(productData) {
        this.model = new artObjectModel(productData);
        this.view = new artObjectView(this.model);
        this.addEvents();
    }

    addEvents() {
        // let imgEl = this.view.productElement.querySelector("img");
        // imgEl.addEventListener("error", () => {
        //     imgEl.src = artObjectView.defaultImg;
        // });
    }
}
