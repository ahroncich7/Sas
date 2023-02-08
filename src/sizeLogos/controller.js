import { sizesLogosModel } from "./model.js";
import { sizesLogos } from "./view.js";


export class sizesLogosController {

    constructor(data) {
        this.model = new sizesLogosModel(data);
        this.view = new  sizesLogos(this.model);
    }

    addEvents() {

    }
}
