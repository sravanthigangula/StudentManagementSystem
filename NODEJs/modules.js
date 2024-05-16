const events= require('events')
const http= require('http')
http.createServer((req,res)=>
{
    res.write("Hello everyone")
    res.end();
}).listen(3000);
var myEmmitter = new events.EventEmitter();
myEmmitter.on("someevent",()=>
{
    console.log(`some event is fired`);
})
myEmmitter.emit("someevent","welcome")