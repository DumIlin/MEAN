let express = require('express');
let path = require('path');

let app = express();
const PORT_NUMBER = 8080;
let print = console.log;
let db = [];
let sp = [];

app.listen(PORT_NUMBER, function(){
    print(`listening on port ${PORT_NUMBER}`);
});

app.get("/addparcel", function(req, res){
    let send = req.query.sender;
    let anAddress = req.query.address;
    let w = parseFloat(req.query.weight);
    let frag = req.query.fragile;

    let obj = {
        id : getId(),
        sender : send,
        address : anAddress,
        weight : w,
        fragile : frag
    }
    db.push(obj);
    res.send(generateList(db))
});

app.get('/getparcels', function(req, res){
    res.send(generateList(db));
});

app.get("/deleteid/:id", function (req, res) {
    let idd = parseInt(req.params.id);
    var index = db.find(item => item.id == idd); 
    db.splice(db.indexOf(index), 1);
    res.send(generateList());
});


app.get("/gettotalweight", function (req, res) {
    let sum = 0;
    db.forEach(ob => { sum += ob.weight;});
    res.send(`The total weight is ${sum}`);
    //res.send(totalWeight(db));
});

app.get("/fragileparcels", function (req, res) {
    let fr = 0;
    for(let i = 0; i < db.length; i++){
        if(db[i].fragile === 'true'){
            fr ++;
        }
    }
    res.send(`The number of fragile elements is ${fr}`);         
});

app.get("/smallparcels", function (req, res) {
    let sp = 0;
    for(let i = 0; i < db.length; i++){
        if(db[i].weight < 1.5){
            sp ++;
        }
    }
    res.send(`The number of small parcels elements is ${sp}`);         
});


app.get('*',function (req, res) {
    res.send('Unrecognized Request');
});

function getId(){
    let id = 1;
    for(let i  = 0; i <= db.length+1;i++){
        id =+ i;
    }
        return id;
}

function generateList() {
    let st = "Sender  Address Weight Fragile  </br>";
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + " | " + db[i].sender + " | " + db[i].address + " | " + db[i].weight + " | " + db[i].fragile + "</br>";
    }
    return st;
} 





