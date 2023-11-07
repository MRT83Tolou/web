let webpage = require('http');
let server = webpage.createServer(Bot);
let port=(80);
server.listen(port);
console.log("server is running on port: "+ port);


let header = {'Content-Type' : 'Text/Plain'}

function Bot (request,response){

    //console.log('request recieved url: ',request.url);
    //console.log('request : ',request);

    let obj = { 
        m: function(){
            console.log("Mim mesle Madar")
            response.writeHead(200,header);
            response.write("Mim mesle Madar");
            response.end();
        },
        a: function(){
            console.log("A mesle atefe")
            response.writeHead(200,header);
            response.write("a mesle atefe");
            response.end();
        },
        "favicon.ico":function(){
            console.log("favicon")
            response.writeHead(200,header);
            response.write("favicon");
            response.end();
        }
    }
    
    let firstPart = request.url.split('/')[1];
    obj[firstPart]();

    // response.writeHead(200,header);
    // response.write(obj);
    // response.end();

}
