const express = require("express");
const router = express.Router();
const { getInventory } = require("../middleware/index"); //middleware

const {
  getInventoryController,
  postInventoryController,
  getInventoryByIdController,
  patchInventoryController,
  deleteInventoryController,
} = require("../controllers/inventory");

//getting all & filter
router.get("/", getInventoryController);

//getting one by id
router.get("/:id", getInventory, getInventoryByIdController);

//creating one
router.post("/", postInventoryController);

//updating one
router.patch("/:id", getInventory, patchInventoryController);

//deleting one
router.delete("/:id", getInventory, deleteInventoryController);

module.exports = router;
