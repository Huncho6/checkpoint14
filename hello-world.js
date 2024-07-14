const http = require('http');
console.log("hello world")

const server = http.createServer((req, res) => {
    // Send the response body
    res.end('<h1>Hello Node!!!!</h1>\n');
  });


server.listen(3000, () => {
    console.log("server is running on port 300");
  });