const http = require('http');
const port = 2500;
const server = http.createServer((req, res) => {
  const serverRes = fetch("https://dummyjson.com/recipes");
  console.log(serverRes);
})
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
