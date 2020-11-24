//  Connect to db
const db = require('../models');
const { Op } = require("sequelize");
// Export Controller Methods
module.exports = {
    getPortfolio: function(req, res) {
        db.Project.findAll({
            raw:true,
            where:{CategoryId:{[Op.eq]:req.params.id}}
        })
        .then(data=>{
            res.json(data); 
        })
    }
}; 