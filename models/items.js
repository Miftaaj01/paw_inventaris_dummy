const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
  },

  qty: {
    type: Number,
  },

  date: {
    type: Date,
  },

  inventory_id: {
    type: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
