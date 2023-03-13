export class product {

    static productsListContainer = document.getElementById("products-in-stock");

    static defaultImg = "https://previews.123rf.com/images/chotwitnote/chotwitnote1801/chotwitnote180100477/92643317-conjunto-del-vector-de-vajilla-en-la-ilustraci%C3%B3n-blanca-del-fondo-.jpg";


    constructor(product) {

        this.message = `https://wa.me/+543548434942?text=Hola,%20me%20interesa%20el%20producto%20${product.title}%20id:%20${product.id}`;

        this.card =
            `<div id = ${product.id} class="product-card">

                <div class="card-img">
                    <img id = img-${product.id} src="${product.img}" alt="${product.title}"></img>
                    <a href="${this.message}" target="_blank" class="call-to-action-small"><h2>CONSULTAR</h2></a>
                </div>


                <div class="product-card-desc">
                        
                    <h3 class="product-title">${product.title.toUpperCase()}</h3>
                        
                    <span class="product-price">$${product.price}</span>
                    
                </div>
            </div>`;

        this.render();
        this.productElement = document.getElementById(product.id);
    }

    render() {
        product.productsListContainer.insertAdjacentHTML("beforeend", this.card);
    }

}