/**
 * Created by jszhou on 2016/4/23.
 */
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<div style="color:orangered;font-size:20px;">hello node server</div>');
}).listen(8989);
