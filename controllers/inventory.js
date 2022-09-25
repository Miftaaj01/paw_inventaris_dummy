const Inventory = require("../models/inventories");

//get all inventory and filtering
const getInventoryController = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    const filters = req.query;
    const filteredInventories = inventory.filter((item) => {
      // console.log(item);
      let isValid = true;
      for (key in filters) {
        console.log(key, item.key, filters.key);
        isValid = isValid && item.key == filter.key;
      }
      return isValid;
    });
    res.send(filteredInventories);
    // console.log(req.query);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get single inventory
const getInventoryByIdController = async (req, res) => {
  let inventory;
  try {
    inventory = await Inventory.findById(req.params.id);
    console.log(req.params.id);
    if (inventory == null) {
      res.status(404).json({ message: "Cannot find inventory" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.json(inventory);
};

//Create new inventory
const postInventoryController = async (req, res) => {
  const inventory = new Inventory({
    title: req.body.title,
    user_id: req.body.user_id,
  });
  try {
    const newInventory = await inventory.save();
    return res.status(201).json(newInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update inventory
const patchInventoryController = async (req, res) => {
  const data = {};

  if (req.params.title != null) {
    data.title = req.params.title;
  }
  if (req.params.user_id != null) {
    data.user_id = req.params.user_id;
  }
  // console.log(data);

  try {
    const updatedInventory = await Inventory.save(data);
    return res.json(updatedInventory);
    // console.log(req.body)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Delete all inventories
// const deleteAllInventoriesController = (req, res) => {
//   Inventory.deleteMany((err) => {
//     if (!err) {
//       res.send("Sucessfully deleted all inventories.");
//     } else {
//       res.send(err);
//     }
//   });
// };

//Delete single inventory
const deleteInventoryController = async (req, res) => {
  try {
    await res.inventory.remove();
    return res.json({ message: "Deleted inventory" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getInventoryController,
  postInventoryController,
  getInventoryByIdController,
  patchInventoryController,
  deleteInventoryController,
};
