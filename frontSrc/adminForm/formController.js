export class formController {

    constructor(formElement){
        this.form = formElement;
    }


    getData(){
        const $data = new FormData(this.form);
        return Object.fromEntries($data.entries());
    }


    setDataInForm(data) {
        this.form.category.value = data.nombre_cat || "";
        this.form.stock.checked = Boolean(data.stock) || "";
        this.form.title.value = data.titulo || "";
        this.form.price.value = data.precio || "";
        this.form.img_url.value = data.img || "";
        this.form.id.value = Number(data.prod_id) || "-";

        window.scrollTo(0, 0);
    }


    setOnClickEvent(cllBck){
        let submitButton = this.form.querySelector("#submit-btn");
        submitButton.addEventListener("click", (e)=> {
            e.preventDefault();
            cllBck(this.getData());
        });

    }


    resetData(){
        this.setDataInForm({});
    }

    validateForm() {
        let form_is_valid = true;
        Object.values(this.getData()).forEach((e) => {
            if (!e) {
                form_is_valid = false;
            }
        });
        return form_is_valid;
    }
}
