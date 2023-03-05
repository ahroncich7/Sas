export class sizesLogos {


    static container = document.getElementById("sizes-list");

    constructor(model) {


        this.card =
            `<div class="size-card small">
                <img src="${model.img}" alt="${model.category}">
                <div class="size-desc">
                    <h3>${model.small_cap} ${model.U_M}</h3>
                    <span>$${model.small_price}</span>
                </div>
            </div>
            <div class="size-card medium">
                <img src="${model.img}" alt="${model.category}">
                <div class="size-desc">
                    <h3>${model.medium_cap} ${model.U_M}</h3>
                    <span>$${model.medium_price}</span>
                </div>
            </div>
            <div class="size-card large">
                <img src="${model.img}" alt="${model.category}">
                <div class="size-desc">
                    <h3>${model.large_cap} ${model.U_M}</h3>
                    <span>$${model.large_price}</span>
                </div>
            </div>`;

        this.render();

    }

    render() {
        sizesLogos.container.innerHTML = this.card;
    }
}
