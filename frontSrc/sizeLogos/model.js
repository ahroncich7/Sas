export class sizesLogosModel {

    constructor(data) {
        this.id = data.cat_id || undefined;
        this.category = data.nombre_cat || undefined;
        this.img = data.size_img || undefined;
        this.small_price = data.small_price || undefined;
        this.medium_price = data.medium_price || undefined;
        this.large_price = data.large_price || undefined;
        this.small_cap = data.small_cap || undefined;
        this.medium_cap = data.medium_cap || undefined;
        this.large_cap = data.large_cap || undefined;
    }
}