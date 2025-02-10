const http = require('http');
const port = 2500;
const server = http.createServer((req, res) => {
  res.write("Welcome to Node Server");
  res.end("Request has been ended");
})
server.listen(port, () => {
  console.log("Server is running on " + port);
});