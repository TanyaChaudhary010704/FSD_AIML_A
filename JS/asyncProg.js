//----PROMISES---
// const mypomise = new Promise((resolve, reject) => {
//   console.log("Executed Promise");
//   // resolve("Success");
//   reject("Network Error");
// });
// mypomise.then((msg) => { console.log(msg); }).catch((err) => { console.log(err); })

// const data = fetch("https://api.github.com/users/riya-rjha");
// data.then((data1) => {
//   return data1.json();
// }).then((res) => {
//   console.log(res);
// });

//----ASYCHRONOUS PROGRAMMING---
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register End");
      resolve();
    },3000)
    
  })
  
}
function sendemail() {
  return new Promise((resolve, reject) => {
    console.log("Email send");
    // reject("Error");
    resolve();
  })
  
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login End");
      resolve();
    },3000)
    
  })
  
}
function getData() {
  return new Promise((resolve, reject) => {
    console.log("Got your data");
    resolve();
  })
  
  
}
function displayData() {
  return new Promise((resolve, reject) => {
    waitforthreesecond();
    console.log("Display user data");
    resolve();
    // reject("Error");
  })
    
}
function waitforthreesecond() {
  const ms = 3000 + new Date().getTime();
  while (ms > new Date()) {
  }
}
// register();
// sendemail();
// login();
// getData();
// displayData();

//callback function
// register(function () {
//   sendemail(function () {
//     login(function () {
//       getData(function () {
//         displayData();
//       })
//     })
//   })
// })

// register().then(sendemail).then(login).then(getData).then(displayData).catch((err) => {
//   console.log(err);
// });

async function authenticate() {
  try {
    await register();
    await sendemail();
    await login();
    await getData();
    await displayData();
  }
  catch (err) {
    console.log("Error");
  }
}
authenticate();
