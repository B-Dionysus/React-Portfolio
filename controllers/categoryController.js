//  Connect to db
const db = require('../models');
const { Op } = require("sequelize");
// Export Controller Methods
module.exports = {
    loadAboutPage: function(req, res) {
        db.Category.findAll({
            raw:true,
            where:{id:{[Op.eq]:1}}
        })
        .then(data=>{
            console.log("db:");
            console.log(data);
            res.json(data); 
        })
    }
}; 