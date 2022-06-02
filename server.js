const http = require('http');

let port =8080;
let hostname = "localhost";

const server = http.createServer((req, res)=>{
    res.end("Hello World", ()=>{
        console.log("Response OK");
    })
});

server.listen(port, hostname, ()=>{
    console.log("Server working OK");
})

