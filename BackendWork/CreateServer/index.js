const http = require("http");
const port = 2500;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write("<h1>Welcome to Node Server</h1>");
  const obj = {
    "name": "xyz",
    "branch": "CSE AIML",
  }
  res.write("Using node js");
  res.end(JSON.stringify(obj));
});
server.listen(port, () => {
  console.log("Server is running on " + port);
});
