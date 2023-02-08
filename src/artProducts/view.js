export class artObject {

    static productsListContainer = document.getElementById("art-cont");

    static defaultImg = "https://previews.123rf.com/images/chotwitnote/chotwitnote1801/chotwitnote180100477/92643317-conjunto-del-vector-de-vajilla-en-la-ilustraci%C3%B3n-blanca-del-fondo-.jpg";


    constructor(object) {

        this.card =
            `<div id = art-${object.id} class="product-card art-card">
                    <img src="${object.img || undefined}" alt="">
                    <div class="product-card-desc">
                    <h3 class="product-title">${object.title || undefined}</h3>
                    </div>
            </div>`;


        this.render();
        this.productElement = document.getElementById(object.id);
    }

    render() {
        artObject.productsListContainer.insertAdjacentHTML("beforeend", this.card);
    }

}