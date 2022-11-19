var http = require("http");
var fs = require("fs");

let print = console.log;
let msg = "";
let params;


http.createServer(function (req, res){
    var baseURL = 'http://' + req.headers.host + '/';
    var url = new URL(req.url, baseURL);

    let pathName = url.pathname;

    if(pathName !== "/favicon.ico"){
        switch(pathName){
            case '/':
                fs.readFile('./view/index.html', function (error, content) {
                    res.end(content);
                });
                break;

            case '/assessments':
                fs.readFile('./view/assessments.html', function (error, content) {
                    res.end(content);
                });
                break;

            case '/topics':
                fs.readFile('./view/topics.html', function (error, content) {
                    res.end(content);
                });
                break;

            case '/details':
                fs.readFile('./view/details.html', function (error, content) {
                    res.end(content);
                });
                break; 

            case '/uni':
                fs.readFile('./view/uni.html', function (error, content) {
                    res.end(content);
                });
                break; 

            case '/whichweek/':
                params = url.searchParams;
                let day = parseInt(params.get('d')); 
                let month = parseInt(params.get('m')); 
                let year = parseInt(params.get('y')); 

                function getDaysDiff(d, m, y) {
                    let returnValue = -1;
                    let currentDay = new Date();
                    currentDay.setDate(parseInt(d));
                    currentDay.setMonth(parseInt(m) - 1); // months start from 0
                    currentDay.setYear(parseInt(y));
                
                    let firstDay = new Date(2022,6,25); // first day in semester 2
                
                    if (currentDay >= firstDay) {
                        var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
                        returnValue = (Math.floor(diffDays / 7) + 1);
                    }
                    return (returnValue);
                }
                
                if(getDaysDiff(day,month,year) === 1){
                    msg = "It's week 1";
                } else if(getDaysDiff(day,month,year) === 2){
                    msg = "It's week 2";
                } else{
                    msg = 'Invalid date';
                }
                res.end(msg)
                break;

            default:
                fs.readFile('./view/404.html', function (error, content) {
                    res.end(content);
                });
                break;
            }
        } 
    }).listen(9000);

