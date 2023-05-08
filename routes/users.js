const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/users", userController.getIndex);
router.post("/users", userController.create);
router.get("/users/:id", userController.getUser);
router.put("/users/:id", userController.update);
router.delete("/users", userController.delete);

module.exports = router;
