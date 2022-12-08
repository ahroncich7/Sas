class sizesCard {

    defaultImg = ``


    constructor(data, productCardCont, cardType) {

        this.card =
            `<div class="size-card small">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h4>${data.small_cap}</h4>
                    <span>$${data.small_price}</span>
                </div>
            </div>
            <div class="size-card medium">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h4>${data.medium_cap}</h4>
                    <span>$${data.medium_price}</span>
                </div>
            </div>
            <div class="size-card large">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h4>${data.large_cap}</h4>
                    <span>$${data.large_price}</span>
                </div>
            </div>`

            productCardCont.innerHTML = this.card
    }
}

export {sizesCard}