const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/users/user");
const { protect } = require("../middlewares/authorize");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(loginUser);
// router.route("/");

module.exports = router;
