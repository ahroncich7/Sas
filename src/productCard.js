class productCard {

    defaultImg = `https://previews.123rf.com/images/chotwitnote/chotwitnote1801/chotwitnote180100477/92643317-conjunto-del-vector-de-vajilla-en-la-ilustraci%C3%B3n-blanca-del-fondo-.jpg`


    constructor(data, productCardCont, cardType) {
        this.setWhatsappMessage(data)
        this.cardType = cardType
        this.id = data.prod_id
        this.title = `<h3 class="product-title">${data.titulo}</h3>`
        this.price = `<span class="product-price">$${data.precio}</span>`
        this.img = `<img id = ${this.cardType}-img-${this.id} src="${data.img}" alt="${data.titulo}"></img>`
        this.btn = `<a href="${this.message}" target="_blank" class="call-to-action-small">CONSULTAR</a>`
        this.setCard()
        this.productCardCont = productCardCont
    }

    updateCard() {
        this.setCard()
        this.productCardCont.insertAdjacentHTML("beforeend", this.card)
        this.imgEl = document.getElementById(this.cardType + "-img-" + this.id)
        this.setDefaultImg()
    }

    setCard() {
        this.card =
            `<div id = ${this.cardType}-${this.id} class="product-card">
                    ${this.img || undefined}
                    <div class="product-card-desc">
                        ${this.title || undefined}
                        ${this.price || undefined}
                        <span>${this.btn || undefined}</span>
                    </div>
            </div>`
    }

    setDefaultImg() {
        this.imgEl.addEventListener("error", () => {
            this.imgEl.src = this.defaultImg
        })
    }

    setWhatsappMessage(data) {
        this.message = `https://wa.me/+543548434942?text=Hola%20me%20
        interesa%20el%20producto:%20${data.titulo}%20id:%20${data.prod_id}`
    }

}

export { productCard }