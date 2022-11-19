const mongoose = require("mongoose");

let parcelSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'Sender'
  },
  weight: {
    type: Number,
  },
  address: String,
  fragile: Boolean,
});
module.exports = mongoose.model("Parcel", parcelSchema);