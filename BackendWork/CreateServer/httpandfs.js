const fs = require("fs").promises;
const http = require("http");
const port = 2500;
const server = http.createServer(async (request, response) => {
  response.setHeader("Content-Type", "text/html");
  if (request.url == "/home" && request.method == "GET") {
    // response.end("Hi i am at /home end point");
    const data = await fs.readFile("home.html", { encoding: "utf-8" });
    const studentData = await fs.readFile("data.json");
    const completeData = studentData + data;
    response.write(studentData);
    response.end(completeData);
  }
  // response.end("Welcome To Node Server");
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
