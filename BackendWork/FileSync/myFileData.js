const fs = require("fs");
function write() {
  try {
    console.log("Before Writing");
    fs.writeFileSync("data.text", "Data is written by node.js");
    console.log("Data Written successfully");
  } catch (err) {
    console.log("Error in writing data: " + err);
  }
}
function read() {
  try {
    console.log("Before reading");
    const rd = fs.readFileSync("data.text", { encoding: "utf8" }); //or
    console.log(rd);
    console.log(rd.toString()); //this
    console.log("After reading");
  } catch (err) {
    console.log("Error in writing data: " + err);
  }
}
function append() {
  try {
    console.log("Before Append");
    fs.appendFileSync("data.text", " Appended data by fs module");
    console.log("After Append");
  } catch (err) {
    console.log("Error in writing data: " + err);
  }
}
function del() {
  try {
    fs.unlinkSync("data.text");
    console.log("File deleted");
  } catch (err) {
    console.log("Error in writing data: " + err);
  }
}
const obj = {
  writeFile: write,
  readFile: read,
  appendFile: append,
  delFile: del,
};
module.exports = obj;
