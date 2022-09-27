// const Inventory = require("../models/inventories");
// const Item = require("../models/items");

// const getInventory = async (req, res, next) => {
//   let inventory;
//   try {
//     inventory = await Inventory.findById(req.params.id);
//     if (inventory == null) {
//       return res.status(404).json({ message: "Cannot find inventory" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.inventory = inventory;
//   next();
// };

// const checkItem = async (req, res, next) => {
//   let item;
//   try {
//     item = await Item.findById(req.params.id);
//     if (item == null) {
//       return res.status(404).json({ message: "Cannot find item" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.item = item;
//   next();
// };

// module.exports = {};
