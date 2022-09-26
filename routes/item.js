const express = require("express");
const router = express.Router();
const { checkItem } = require("../middleware/index");

const {
  getAllItemController,
  getSingleItemController,
  postItemController,
  patchItemController,
  deleteItemController,
} = require("../controllers/item");

//get all items
router.get("/", getAllItemController);

//get items by id
router.get("/:id", checkItem, getSingleItemController);

//create new item
router.post("/", postItemController);

//update item
router.patch("/:id", checkItem, patchItemController);

//delete item
router.delete("/:id", checkItem, deleteItemController);

module.exports = router;
