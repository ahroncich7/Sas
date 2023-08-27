import { productView } from "./productView.js";

export class formProduct {



    constructor(data) {
        this.data = data;
        this.productView = new productView(this.data);
        this.render();
    }


    render() {
        productView.productsContainer.insertAdjacentHTML("beforeend", this.productView.card);
    }

    getEditButton() {
        return document.querySelector(`#edit-${this.data.prod_id}`);

    }

    getDeleteButton(){
        return document.querySelector(`#delete-${this.data.prod_id}`);
    }

}
