const Item = require("../models/items");

const getAllItemController = async (req, res) => {
  try {
    const item = await Item.find();
    const filters = req.query;
    const filteredItem = item.filter((item) => {
      // console.log(item);
      let isValid = true;
      for (key in filters) {
        console.log(key, item[key], filters[key]);
        isValid = isValid && item[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredItem);
    // console.log(req.query);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleItemController = async (req, res) => {
  //   let item;
  //   try {
  //     item = await Item.findOne({ name: req.params.name });
  //     if (item == null) {
  //       return res.send("cannot find item.");
  //     }
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  //   res.json(item);
  res.send(res.item);
};

const postItemController = async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name,
      category: req.body.category,
      qty: req.body.qty,
      inventory_id: req.body.inventory_id,
    });
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const patchItemController = async (req, res) => {
  const data = {};
  if (req.body.name != null) {
    data.name = req.body.name;
  }
  if (req.body.category != null) {
    data.category = req.body.category;
  }
  if (req.body.qty != null) {
    data.qty = req.body.qty;
  }
  if (req.body.inventory_id != null) {
    data.inventory_id = req.body.inventory_id;
  }

  try {
    const updatedItem = await Item.save(data);
    return res.json(updatedItem);
    // console.log(req.body)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteItemController = async (req, res) => {
  try {
    await res.item.remove();
    return res.json({ message: "Deleted item successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllItemController,
  getSingleItemController,
  postItemController,
  patchItemController,
  deleteItemController,
};
