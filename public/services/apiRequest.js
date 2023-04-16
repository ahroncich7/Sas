export function getAllProducts() {
    let results = fetch("https://sas.up.railway.app/listAll", {

    }).then((e) => e.json()).
        catch(e => console.log(e));
    return results;

}

