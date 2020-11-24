const router = require("express").Router();
const genericRoutes = require("./generic");
const projectController = require("../../controllers/projectController");
const categoryController = require("../../controllers/categoryController");


router.get("/aboutInfo",categoryController.loadAboutPage);
router.get("/coding",categoryController.getCodePage);
router.get("/portfolio/:id",projectController.getPortfolio);
module.exports = router;
  