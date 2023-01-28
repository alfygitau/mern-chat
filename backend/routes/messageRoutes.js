const express = require("express");
const { sendMessage, allMessages } = require("../controllers/message/message");
const { protect } = require("../middlewares/authorize");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
