const events= require('events')
const http= require('http')

var myEmmitter = new events.EventEmitter();
myEmmitter.on("someevent",()=>
{
    http.createServer((req,res)=>
        {
            res.write("Hello everyone from some event")
            res.end();
        }).listen(3000);
})
myEmmitter.emit("someevent","welcome")