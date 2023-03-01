const path = require("path");

const adminController = {

    sendAdmin: (req, res) =>{
        res.sendFile(path.resolve("admin.html"));
    },

    sendLogin: (req, res) => {
        res.sendFile(path.resolve("login.html"));
    } 

};

module.exports = adminController;