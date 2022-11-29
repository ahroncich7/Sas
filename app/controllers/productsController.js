const DB = require("../model/productsModel")

productsConnection = new DB()

productsController = {

    listByType: (type) => {
        let response = productsConnection.selectByType(type)
        return response
    },

    listSizesExamples: (type) => {
        return `Aqui se mostrarán los ejemplos de tamaño para el tipo ${type}`
    },

    listFilteredProducts: (filterCriteria) => {

    },

    

    insertNewProduct: (data) => {
        let response = productsConnection.insert(data) 
        return response
    }

}


module.exports = productsController