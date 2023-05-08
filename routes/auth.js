const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.getIndex);
router.post("/login", authController.login);
router.get("/auth/user", authController.register);
router.post("/reset-password", authController.resetPassword);
router.post("/update-password", authController.updatePassword);

module.exports = router;
