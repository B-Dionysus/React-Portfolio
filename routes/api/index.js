const router = require("express").Router();
const genericRoutes = require("./generic");

const genericController = require("../../controllers/genericController");
const categoryController = require("../../controllers/categoryController");
// generic routes
// router.use("/generic", genericRoutes);
router.get("/aboutInfo",(res, req)=>
 // .get(categoryController.loadCatInfo)
 {
     console.log("Hello?");
     return res.json({test:"Hello"})
 }
);

module.exports = router;
 