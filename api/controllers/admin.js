const path = require("path");

const adminController = {

    sendAdmin: (req, res) => {
        res.sendFile(path.resolve("public/components/newAdmin/admin.html"));
    },

    sendLogin: (req, res) => {
        res.sendFile(path.resolve("login.html"));
    }

};

module.exports = adminController;