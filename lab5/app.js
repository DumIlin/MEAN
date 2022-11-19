const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express = require('express')
const app = express();
const path = require('path')

const url = 'mongodb://10.152.168.99:9033';
let db;
app.listen(8080);
app.use(express.urlencoded({extended : true}))

MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
    if (err) {
        console.log('Err  ', err);
    } else {
        console.log("Connected successfully to server");
        db = client.db('warehouse');
    }
    db.collection('products');

});
app.get('/ind',function(req,res){
    res.sendFile(path.join(__dirname,'views','ind.html'))
});

app.post('/productpost',function(req,res){
    let name = req.body.name;
    let cost = req.body.cost;
    let quantity = req.body.quantity;
    let obj = {
        name : name,
        cost : cost,
        quantity : quantity
    }
    db.collection('products').insertOne(obj)
    res.send('Thank you!')
    
})