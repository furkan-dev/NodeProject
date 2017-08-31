/*

coder : furkan-dev

licensed by gnu-general-license

*/

var http = require('http');

var fs = require('fs');

var yonlendirici = new Object();

var homeController = function(req,res) {

    fs.readFile("index.html",function(err,data){
        
        res.write(data);
          
        res.end("Mesaj Bitti"); 
        
        console.log('homePage');
        
    });

}

var loginController = function(req,res) {

    fs.readFile("login.html",function(err,data){
        
        res.write(data);

        res.end("Mesaj Bitti");
        
        console.log('loginPage');
        
    });

}

yonlendirici["/"] = homeController;

yonlendirici["/login"] = loginController;

var server = http.createServer(function(req,res){

    if (req.url in yonlendirici) {

        yonlendirici[req.url](req,res);

    }

});

server.listen(8000);