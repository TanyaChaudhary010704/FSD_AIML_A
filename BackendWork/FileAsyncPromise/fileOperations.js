const fs = require('fs').promises;
const promise = fs.writeFile("data.txt", "Hello writing data through FS promises");
//console.log(promise);
promise.then(() => {
  console.log("Data written successfully");
}).catch(err => {
  console.log("Error is err" + err);
}).finally(msg=> {
  console.log("Finally done");
})
const promise2 = fs.readFile("data.txt");
//console.log(promise);
promise2.then((data) => {
  console.log("Data read successfully");
  console.log(data.toString());
}).catch(err => {
  console.log("Error is err" + err);
}).finally(msg=> {
  console.log("Finally done");
})
//fs.readFile();