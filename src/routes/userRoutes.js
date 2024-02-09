const express = require('express');
const router = express.Router();
const { createUser, getAllUser, getUserById, updateUser, deleteUser } = require('../controller/userController');

router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
