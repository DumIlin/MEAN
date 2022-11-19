const mongoose = require('mongoose');

const Parcel = require("../models/parcel");

module.exports = {
    getAllByAddress: function (req, res) {
        let address = req.query.address;
        Parcel.find({
            address: address
        }).populate('sender', "name").exec(function (err, results) {
            if (err) return res.json(err);
            res.json(results);
        })
    },
    getAll: function (req, res) {
        Parcel.find({}).populate('sender', "name").exec(function (err, results) {
            if (err) return res.json(err);
            res.json(results);
        })
    },
    updateAddress: function (req, res) {
        let id = req.body.id;
        let address = req.body.address;
        Parcel.findOneAndUpdate(id, {
            address: address
        }, function (err, results) {
            if (err) return res.json(err)
            else res.json(results);
        });
    }



}