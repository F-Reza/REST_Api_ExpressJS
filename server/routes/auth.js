// *----------------------
//* express.Router
// *----------------------

const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/signup-validation");

// router.route("/").get((req, res) => {
//   res.status(200).send("Welcome to home");
// });


router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/profile").post(authControllers.profile);
router.route("/update").post(authControllers.update);

module.exports = router;