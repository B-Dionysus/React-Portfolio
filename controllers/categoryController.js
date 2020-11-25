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
            res.json(data); 
        })
    },
    getPage:function(req, res) {
        console.log("==================================================");
        
        let project=req.route.path.substr(1,req.route.path.length);
        console.log(project);
        db.Category.findAll({
            raw:true,
            where:{tabName:{[Op.eq]:project}}
        })
        .then(data=>{
            res.json(data); 
        })
    }
}; 