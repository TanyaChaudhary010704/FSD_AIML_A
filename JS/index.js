//-------var has global scope
// var a = 12;
// if (a > 10) {
//   a = 30;
//   var b = 67;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

//------------has block scope
// let a = 12;
// if (a > 10) {
//   a = 30;
//   let b = 67;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b); //b is not defined

// --------const can't be changed
// const a = 12;
// if (a > 10) {
//   a = 30;
//   const b = 67;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

//-----------DATATYPES
// a = 12;
// b = 12.5;
// c = true;
// d = "JavaScript";
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof (d));

// console.log(Number.MAX_VALUE);

//--------------FUNCTIONS
// function Hello(msg) {
//   console.log(msg);
// }
// Hello("Hi Tanya");

//-------can assign functions in variables
// const sum = function Add(x, y, z) {
//   return (x + y + z);
// };

//-----------ARROW FUNCTIONS
// const add = (a, b=1) => a + b ;
// console.log("sum :",add(23));

//----------DEFAULT PARAMETERS
// const add1 = (a, b) => a + b ;
// console.log("sum :",add1(1,2));

// const btn = document.querySelector("#myBtn");
// btn.addEventListener("click", () => {
// })

//-------------OBJECTS
// const Person={
//   name: "John",
//   age:20,
// }
//---------points to the same object
// const Person2 = Person;
// Person2.name = "Lily";
// Person2.age = 50;
// console.log(Person);

//------------SPREAD OPERATOR
//----create a copy of the person object
// const newPerson = {...Person,name: "ABC"}
// newPerson.age = 35;
// console.log(Person.age);
// console.log(Person.age);

// const emp = ["xyz", 30, 10101.50];
// const newEmp = [...emp];
// const newEmp1 = [1, ...emp];

//-----------TEMPLATE LITERAL
// const firstName = "Tanya";
// const lastName = "Chaudhary";
// console.log(firstName + " " + lastName);
// console.log('${firstName} ${lastName}');

//------------DESTRUCTURING
// const person = {
//   name: "ABC",
//   age: 45,
//   salary: 11154.50,
// }

// const { name, age, salary } = person;
// console.log(name);
// console.log(age);
// console.log(salary);
 
// const emp = ["xyz", 30, 10101.50];
// const [name2, age2, salary2] = emp;
// console.log(name2);
// console.log(age2);
// console.log(salary2);

//--------------------------SET AND MAP
// const myMap = new Map(
//   [
//     ["key1", 1],
//     [24,"value"]
//   ]
// );
// console.log(myMap.get(24));
// console.log(myMap.get("key1"));
// myMap.set("key2", "js");
// console.log(myMap);

// const mySet = new Set();
// console.log(mySet);
// mySet.add(23);
// mySet.add(23);
// mySet.add(20);
// console.log(mySet);

//-------------------------------FILTER
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const b = arr.filter((x) => x % 2 ==0);
// console.log(b);
// const c = arr.map((x) => x *2);
// console.log(c);
const d = arr.reduce((s,x) => s+x);
console.log(d);