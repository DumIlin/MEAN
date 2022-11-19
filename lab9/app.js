const express = require('express');
const mongoose = require("mongoose");
let path = require("path");

const sender = require("./routers/sender");
const parcel = require("./routers/parcel");


let app = express();
const PORT_NUMBER = 8081;

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});

app.use(express.json())

app.use("/", express.static(path.join(__dirname, "dist/lab9")));
//console.log(path.join(__dirname, "dist/lab9"))

let url = "mongodb://localhost:27017/labweek7app";

let print = console.log;

mongoose.connect(url, function (err) {
  if (err) print("unable to connect to Mongoose");
  else print("connect to DB successfully");
});

app.get('/sender/:name', sender.getAllByName);
app.get('/sender', sender.getAll);
app.post('/sender', sender.createSender);
app.delete('/sender/:id', sender.deleteSender);
app.put('/sender', sender.updateSender);
app.put('/sender/parcel/', sender.addParcel);

app.get('/parcel/:address', parcel.getAllByAddress);
app.get('/parcel', parcel.getAll);
app.put('/parcel', parcel.updateAddress);

