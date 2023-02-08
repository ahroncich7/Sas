export class artObject {

    constructor(data) {
        this.id = data.prod_id || undefined;
        this.title = data.titulo || undefined;
        this.img = data.img || undefined;
    }
}