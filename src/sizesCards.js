class sizesCard {

    defaultImg = ``


    constructor(data, productCardContainer, cardType) {

        this.card =
            `<div class="size-card small">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h3>${data.small_cap} ml</h3>
                    <span>$${data.small_price}</span>
                </div>
            </div>
            <div class="size-card medium">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h3>${data.medium_cap} ml</h3>
                    <span>$${data.medium_price}</span>
                </div>
            </div>
            <div class="size-card large">
                <img src="${data.size_img}" alt="${data.nombre_cat}">
                <div class="size-desc">
                    <h3>${data.large_cap} ml</h3>
                    <span>$${data.large_price}</span>
                </div>
            </div>`

            productCardContainer.innerHTML = this.card
    }
}

export {sizesCard}