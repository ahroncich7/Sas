export class product {

    constructor(data) {
        this.id = data.prod_id || undefined;
        this.title = data.titulo || undefined;
        this.price = data.precio || undefined;
        this.img = data.img || undefined;
    }
}