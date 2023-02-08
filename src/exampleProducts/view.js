export class exampleProduct {

    static productsListContainer = document.getElementById("products-list");


    constructor(product) {

        this.card =
            `<div id = example-${product.id} class="product-card">
            <img src="${product.img}" alt="${product.title}"></img>
           
                    <h3 class="product-title">${product.title.toUpperCase()}</h3>

                    </div>
            </div>`;

        this.render();
        this.productElement = document.getElementById(product.id);
    }

    render() {
        exampleProduct.productsListContainer.insertAdjacentHTML("beforeend", this.card);
    }

}