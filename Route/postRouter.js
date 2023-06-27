const express = require("express");
const router = express.Router();
const { create_burger,get_all_burger,update_burger,delete_burger } = require("../controller/jazzyController");

router.post("/create", create_burger);

router.get('/getAll', get_all_burger);

router.patch("/update/:postId", update_burger);

router.delete("/delete/:postId", delete_burger);

module.exports = router;
