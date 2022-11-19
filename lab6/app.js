const express = require('express');
const app = express();
let path = require('path');
let ejs = require('ejs');
const mongoose = require('mongoose')

const PORT_NUMBER = 8080;
const url = 'mongodb://localhost:27017/lab6';

app.use(express.urlencoded({ extended: true }));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.static('public/imgs'));
app.use(express.static('public/css'));

//config for ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.listen(PORT_NUMBER, () => {
    console.log(`Listening on port ${PORT_NUMBER}`);
});


const Office = require('./models/office')


mongoose.connect(url, function(err){
    if(err === null)
    console.log('Connected successfully')

});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/views/index.html'));
});
//new parcel
app.get('/addparcel',function(req,res){
    res.sendFile(path.join(__dirname,'/views/newparcel.html'));
});

app.post('/add', function(req,res){
    let sender = req.body.sender;
    let address = req.body.address;
    let weight = parseInt(req.body.weight);
    let fragile = req.body.fragile;
    let cost = req.body.cost;

    let office = new Office({
        sender : sender,
        address : address,
        weight : weight,
        cost: cost,
        fragile : fragile
        })
        office.save(function(err){
            if (err)
            console.log('not saved' +err)
            else console.log('saved')
        })
        res.redirect('/getparcels')
});

app.get('/getparcels',function(req,res){
    Office.find({}, function (err, data) {
        console.log(data);
        res.render('listparcels', {Office : data})
    });
});

app.get("/deleteparcel", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/deleteparcel.html"));
  });

app.post("/delparcel", function (req, res) {
    let choice = req.body.select;
    let ch = req.body.ch;

    if (choice === 'i') {
        Office.findByIdAndDelete({_id: ch}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", docs);
            }
        }); 
    } else if (choice === 's') {
        Office.deleteMany({sender: ch}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    })
}
    res.redirect("/getparcels"); 
});


app.get("/delWoAoF", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/delWoAoF.html"));
  });

app.post("/de", function (req, res) {
    let choice = req.body.select;
    let ch = req.body.ch;

    if (choice === 'w') {
        let n = parseInt(ch)
        Office.deleteMany({weight: n}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", docs);
            }
        }) 
    } else if (choice === 'a') {
        Office.deleteMany({address: ch}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", docs);
            }
        })
    } else if (choice === 'f') {
        Office.deleteMany({fragile: ch}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", docs);
            }
        })
    }
    res.redirect("/getparcels");
});

app.get("/listS", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/listS.html"));
  });

app.post("/del", function (req, res) {
    Office.find({sender:req.body.sender}, function (err, data) {
        console.log(data);
        res.render('listparcels', {Office : data})
    });
}); 

app.get("/listW", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/listW.html"));
  });

app.post("/dele", function (req, res) {
    let min = parseInt(req.body.min);
    let max = parseInt(req.body.max);
    Office.find({weight: {$gte  : min, $lte: max}}, function (err, data) {
        console.log(data);
        res.render('listparcels', {Office : data})
    })
});

app.get("/updateparcel", function (req, res) {
    res.sendFile(__dirname + "/views/updateparcel.html");
});
  
app.post("/parceup", function (req, res) {
    let id = req.body.id;
    Office.findByIdAndUpdate(id,
    {
        sender: req.body.sender,
        address: req.body.address,
        weight: req.body.weight,
        fragile: req.body.fragile
      },
    function(err){
        if(err)
        console.log(err)
        else
        console.log('Updated succesfully')
    })
    res.redirect("/getparcels"); 
  });

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'/views/404.html'));
});



