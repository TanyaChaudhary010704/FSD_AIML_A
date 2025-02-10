const fs = require('fs');
function dataWriteCB() {
  fs.writeFile("data.pdf", "Hello Writting pdf file", (err) => {
    if (err) {
      console.log("Error in writing file: " + err);
    }
    console.log("All data written successfully");
  });
  console.log("Resources closed");
}

function dataReadCB() {
  fs.readFile("data.pdf", {encoding:'utf-8'},(err,data) => {
    if (err) {
      console.log("Error in reading file: " + err);
    }
    console.log(data);
    console.log("All data read successfully");
  });
  console.log("Resources closed");
}
const obj = {
  write: dataWriteCB,
  read: dataReadCB,
};
module.exports = obj;
