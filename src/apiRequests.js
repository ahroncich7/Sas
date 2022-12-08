function insertDataInDB(dataObject) {
    const results = fetch("/insertProduct", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(dataObject)
    }).then((e) => e.json())

    return results
}

function updateDataInDB(dataObject) {
    const results = fetch("/updateProduct", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(dataObject)
    }).then((e) => e.json())

    return results
}

function deleteProduct(id) {
    let response = fetch("/deleteProduct", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE",
        body: JSON.stringify({ id: id })
    }).then((e) => e.json())
        .catch(e => console.log(e))

    return response
}

function getAllProducts() {
    let results = fetch("/listAll", {

    }).then((e) => e.json()).
        catch(e => console.log(e))

    return results
}

function getProductsInStock() {
    let results = fetch("/listInStock", {

    }).then((e) => e.json()).
        catch(e => console.log(e))

    return results
}

function getProductsByType(type) {
    let results = fetch(`/listByType?type=${type}`, {

    }).then((e) => e.json()).
        catch(e => console.log(e))

    return results
}

function getCategory(category) {
    let results = fetch(`/listCategory?category=${category}`, {

    }).then((e) => e.json()).
        catch(e => console.log(e))

    return results
}


export {
    insertDataInDB,
    updateDataInDB,
    deleteProduct,
    getAllProducts,
    getProductsByType,
    getProductsInStock,
    getCategory
}