const mongoose = require('mongoose');

const Sender = require("../models/sender");
const Parcel = require("../models/parcel");

module.exports = {
    getAllByName: function (req, res) {
        let aName = req.params.name;
        Sender.find({
            name: aName
        }).populate('parcels').exec(function (err, result) {
            if (err) return res.json(err);
            else res.json(result);
        })
    },
    getAll: function (req, res) {
        let aName = req.params.name;
        Sender.find({}).populate('parcels').exec(function (err, result) {
            if (err) return res.json(err);
            res.json(result);
        })
    },
    createSender: function (req, res) {
        let senderDetails = req.body;
        let theSender = new Sender(senderDetails);
        theSender.save(function (err) {
            if (err) return res.json(err);
            else
                res.json(theSender);
        });
    },
    deleteSender: function (req, res) {
        let senderId = req.params.id;
        Sender.findByIdAndDelete(senderId, function (err, result) {
            if (err) return res.json(err);
            else
                res.json(result);
        });
    },
    updateSender: function (req, res) {
        let senderId = req.body.id;
        let theName = req.body.name;
        Sender.findByIdAndUpdate(senderId, {
            $set: {
                name: theName
            }
        }, function (err, result) {
            if (err) return res.json(err);
            else
                res.json(result);
        });
    },
    addParcel: function (req, res) {
        let senderId = req.body.senderId;
        //console.log("sender id", senderId)
        let parcelDetails = req.body;
        let aParcel = new Parcel(parcelDetails);
        aParcel.sender = senderId;
        Sender.findOne({
            _id: senderId
        }, function (err, sender) {
            if (!sender) {
                res.status(404).json("Sender not found");
                return;
            }

            aParcel.save(function (err, result) {
                sender.parcels.push(aParcel);

                sender.save(function (err, result) {
                    if (err) return res.json(err);
                    res.json(result);
                });
            })

        });
    }
}