const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get(
  "/auth",
  userController.check
  //(req, res) => {
  // res.json({ message: "All working!" });
  //}
);

module.exports = router;
