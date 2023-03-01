const { ADMIN_PASS } = require("../config/config.js");

const authMiddleware = {

    autenticateAdmin: (req, res, next) => {
        
        // check if the req come from a client with valid admin pass 
        if (req.query.pass && req.query.pass == ADMIN_PASS) {
            console.log("acces");
            next();
        } else {
            res.redirect("/login");
        }
    }
};

module.exports = authMiddleware;