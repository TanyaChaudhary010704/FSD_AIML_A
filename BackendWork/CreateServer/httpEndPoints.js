const http = require('http');
const server = http.createServer((req, res) => {
  res.write("Welcome to node js server!");
  //console.log(Object.keys(req));
  console.log(req.method + " " + req.url);
  if (req.url == "/data" && req.method == "GET") {
    res.end("<h2>Hii! I am available at this end point!</h2>");
  }
  if (req.url == "/msg" && req.method == "POST") {
    res.end("<h2>Hii! I am at Post end point!</h2>");
  }
  
});
server.listen(2500, () => {
  console.log("Server in running on :" + 2500);
});