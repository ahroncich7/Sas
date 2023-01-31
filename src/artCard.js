import { productCard } from "./products/model.js";

class artCard extends productCard {
    constructor(data, productCardCont, cardType) {
        super(data, productCardCont, cardType)

        this.title, this.price, this.btn = ""

    }

    setCard() {
        this.card =
            `<div id = ${this.cardType}-${this.id} class="product-card art-card">
                    ${this.img || undefined}
                    <div class="product-card-desc">
                        ${this.title || undefined}
                    </div>
            </div>`
    }
}

export {artCard}