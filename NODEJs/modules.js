const http = require('http');
const fs = require('fs');
const studentdata = [
    {
        "id": "1",  
        "name": "a",
        "marks": "50"
      },
      {
        "id": "2",
        "name": "b",
        "marks": "90"
      },
      {
        "id": "3",
        "name": "c",
        "marks": "56"
      },
      {
        "id": "5",
        "name": "e",
        "marks": "86"
      },
      {
        "id": "8",
        "name": "sravi",
        "marks": "98"
      }
    
];

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("Hello everyone from some event");
        res.end();
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(studentdata));
        res.end();
    } else if (req.url === '/index.html') {
        fs.readFile("C:\\Users\\CVR\\Desktop\\6743\\index.html", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write("404 - Not Found");
        res.end();
    }
}).listen(2000, () => {
    console.log('Server is running on port 3000');
});
