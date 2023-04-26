const router = require("express").Router();
const userController = require("./user.controller");

router.route("/").get(userController.listUsers)
router.route("/:userId").get(userController.showUser)
router.route("/").post(userController.createUser);

module.exports = router;