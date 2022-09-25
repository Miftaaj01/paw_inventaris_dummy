const Inventory = require("../models/inventories");

const getInventory = async (req, res, next) => {
  let inventory;
  try {
    inventory = await Inventory.findById(req.params.id);
    if (inventory == null) {
      return res.status(404).json({ message: "Cannot find inventory" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.inventory = inventory;
  next();
};

module.exports = getInventory;
