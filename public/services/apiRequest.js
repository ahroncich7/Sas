const BASE = "https://sas.up.railway.app";

export function getAllProducts() {
    let results = fetch(BASE + "/listAll", {

    }).then((e) => e.json()).
        catch(e => console.log(e));
    return results;

}

export function insertDataInDB(dataObject) {
    const request = fetch(BASE + "/insertProduct", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(dataObject)
    });

    return request;
}

export function deleteProductInDb(id) {
    let response = fetch(BASE + "/deleteProduct", {

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify({ id: id })
    }).then((e) => e.json())
        .catch(e => console.log(e));

    return response;
}

export function updateDataInDB(dataObject) {
    const results = fetch(BASE + "/updateProduct", {

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(dataObject)
    });

    return results;
}








// export function getCategories() {
//     let results = fetch("/listCategories", {

//     }).then((e) => e.json()).
//         catch(e => console.log(e));

//     return results;
// }

