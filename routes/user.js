const express = require("express");
const router = express.Router();

const { registerController, userList } = require("../controllers/user");

router.get("/", userList);
router.post("/register", registerController);
router.post("/login");

module.exports = router;
