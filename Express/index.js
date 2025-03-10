const express = require('express');
const path = require('path');
const app = express();
const port = 3003;
const user = [{ id: 101, name: "cs" }, { id: 102, name: "civil" }];

app.get('/', (req, res) => {
  res.send("Welcome "+req.query.name);
});
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname,'form.html'));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'home.html'));
});
app.get("/about", (req,res) => {
  res.sendFile(path.join(__dirname,'about.html'));
});
app.get("/contact", (req,res) => {
  res.sendFile(path.join(__dirname,'contact.html'));
});
app.listen(port, () => {
  console.log(`listen on port : ${port}`);
});