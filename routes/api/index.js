const router = require("express").Router();
const genericRoutes = require("./generic");

const genericController = require("../../controllers/genericController");
const categoryController = require("../../controllers/categoryController");
// generic routes
// router.use("/generic", genericRoutes);
// router.get("/aboutInfo",(req, res)=>
//  {
//     .get(categoryController.loadCatInfo)
//  }
// );
router.get("/aboutInfo",categoryController.loadAboutPage);
module.exports = router;
 