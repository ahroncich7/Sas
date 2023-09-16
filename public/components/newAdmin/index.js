async function run() {
    const template = await fetch("productlist.html");
    const content = await template.text();
    // document.querySelector("#root").innerHTML = content;

    function Controller() {
        // Reactive properties

        const self = this;

        self.setStyle = (product) => {
            if (product.stock) {
                product.container.style.backgroundColor = "lightgreen";
            } else {
                product.container.style.backgroundColor = "lightpink";
            }
        };

        self.save = () => {

        };

        self.edit = (product) => {
            Object.assign(self.selectedProduct, product);
        };

        self.selectedProduct = {
            nombre_cat: ""
        };

        self.search = (value) => {
            self.filteredRows = self.rows.filter(row => row.titulo.toLowerCase().includes(value.toLowerCase()) ||
                row.prod_id.toString().includes(value));
        };

        self.rows = [
            {
                "titulo": "Pocillo sin Asa",
                "precio": 1000,
                "img": "https://i.ibb.co/hW7hnyr/IMG-20220925-123135862.jpg",
                "stock": 0,
                "prod_id": 1,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Taza Pincelada Azul Claro",
                "precio": 1600,
                "img": "https://i.ibb.co/vXCkt20/IMG-20220925-122804134.jpg",
                "stock": 0,
                "prod_id": 3,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Taza 280 ml",
                "precio": 1950,
                "img": "https://i.ibb.co/9gwJhrQ/Im-genes-Sas.jpg",
                "stock": 1,
                "prod_id": 55,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Tazas 220ml",
                "precio": 3100,
                "img": "https://i.ibb.co/2FcgSWN/Tazas-220.png",
                "stock": 1,
                "prod_id": 61,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Taza natural 300ml",
                "precio": 2050,
                "img": "https://i.ibb.co/wrTdKw5/taza-natural300ml.jpg",
                "stock": 0,
                "prod_id": 79,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Pocillos oscuros",
                "precio": 1190,
                "img": "https://i.ibb.co/wgLMjFX/pocillomarron.png",
                "stock": 0,
                "prod_id": 93,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Taza sin asa 220ml",
                "precio": 1500,
                "img": "https://i.ibb.co/dcKyY6c/tazassinasa.png",
                "stock": 0,
                "prod_id": 94,
                "cat_id2": 1,
                "cat_id": 1,
                "nombre_cat": "Tazas",
                "small_price": 1400,
                "small_cap": "100",
                "size_img": "https://i.ibb.co/ZhQP7Wc/tazas.png",
                "medium_price": 2000,
                "medium_cap": "220",
                "large_price": 2800,
                "large_cap": "300",
                "U_M": "ml"
            },
            {
                "titulo": "Bowl Mediano",
                "precio": 3900,
                "img": "https://i.ibb.co/fpk2xGN/bowl-mediano.png",
                "stock": 0,
                "prod_id": 51,
                "cat_id2": 2,
                "cat_id": 2,
                "nombre_cat": "Bowls",
                "small_price": 3700,
                "small_cap": "400",
                "size_img": "https://i.ibb.co/pKRXFhj/cuencos.png",
                "medium_price": 4800,
                "medium_cap": "680",
                "large_price": 5300,
                "large_cap": "950",
                "U_M": "ml"
            },
            {
                "titulo": "Bowl Chico",
                "precio": 3700,
                "img": "https://i.ibb.co/0tZj30q/Bowl-Chico.jpg",
                "stock": 1,
                "prod_id": 52,
                "cat_id2": 2,
                "cat_id": 2,
                "nombre_cat": "Bowls",
                "small_price": 3700,
                "small_cap": "400",
                "size_img": "https://i.ibb.co/pKRXFhj/cuencos.png",
                "medium_price": 4800,
                "medium_cap": "680",
                "large_price": 5300,
                "large_cap": "950",
                "U_M": "ml"
            }
        ];

        self.filteredRows = self.rows;
        // Component template
        return content;
    }
    lemonade.render(Controller, document.getElementById("root"));
}
run();
