const mongoose = require("mongoose");
let officeSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
    sender: String,
    address: String,
    weight: Number,
    cost: Number,
    fragile: String
});

module.exports = mongoose.model('Office', officeSchema);