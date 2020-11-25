const router = require("express").Router();
const genericRoutes = require("./generic");
const projectController = require("../../controllers/projectController");
const categoryController = require("../../controllers/categoryController");


router.get("/aboutInfo",categoryController.loadAboutPage);
router.get("/coding",categoryController.getPage);
router.get("/portfolio/:id",projectController.getPortfolio);
router.get("/music",categoryController.getPage);
module.exports = router;
  