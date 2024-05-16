const events= require('events')
const http= require('http')
http.createServer((req,res)=>
{
    
})
var myEmmitter = new events.EventEmitter();
myEmmitter.on("someevent",()=>
{
    console.log(`some event is fired`);
})
myEmmitter.emit("someevent","welcome")