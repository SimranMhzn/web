// //current date and time
// const now=new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth()+1);//index 0 bata suru huncha (0-january, 11-december)
// console.log(now.getHours()+" hour:",now.getMinutes()+" minutes");
// now.setMonth(8);
// console.log(now);

// //Specific date and time
// const specificDate=new Date('2023-09-09');
// console.log(specificDate);

// //formatting date
// let date=new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());

// //Date arithemtic
// const date1=new Date('2023-10-05');
// const date2=new Date('2023-10-10');
// const diffTime=date2.getTime()-date1.getTime();
// const diffinDays=diffTime/(1000*3600*24);
// console.log(diffinDays);

// //utc dates: calculations done in millisecond
// const year=date.getUTCFullYear();
// const mth=date.getUTCMonth();
// const dt=date.getUTCDate();
// console.log(year,mth,dt);

// if(date1<date2){
//   console.log(date1," is earlier than ", date2)
// }
// else if(date1>date2){
//   console.log(date1,"is later than ",date2);
// }
// else{
//   console.log("The years are same.");
// }

// //Add/Sub time
// //Add 5 days
// date.setTime(date.getTime()+(5*24*60*60*1000));
// console.log(date);

// //time zone
// console.log(date.toLocaleString('en-US',{timeZone:'America/New_York'}));

// //functions
// function add(a,b){
//   return a+b;
// }
// console.log(add(5,2));

// // arrow function
// const add=(a,b)=> a+b;

// //calculator
// function add(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }
// function mul(a,b){
//   return a*b;
// }
// function calculator(){
//   a=10;
//   b=2;
//   console.log("Add: "+add(a,b));
//   console.log("Sub: "+sub(a,b));
//   console.log("Mul: "+mul(a,b));
// }
// calculator();

// //immediately invoked function exception
// (function(){
//   console.log("THIS RUNS IMMEDIATELY.");
// })();

// //arrow function
// let sum=(a,b)=>{
//   return a+b;
// }

// console.log(sum(5,3));

// //generator function
// //allows to pausa and resume execcution using yeild keyword

// //async function
// //handles asynchronous operations using async and await
// //always returns a promise
// async function fetchData() {
//   const response=await fetch("http://api.example.com/data");
//   const data=await response.json();
//   return data;
// }
// fetchData().then(data=>console.log(data);//then le fetch gare pachi tesma jancha
// //catch le error catch garccha


// fetch("http://api.example.com/data")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch()

// async function fetchData() {
//   let videos=await fetch('https://jsonplaceholder.typicode.com/posts');
//   let data=await videos.json();
//   console.log(data);
// }

// //async le same time ma diff task perform garne
// //await le dherai time lagne task ma wait garne

// //higher order function
// //takes another function as argument 
// //1. passing function as argument
// function greet(name){
//   return "hello " + name;
// }
// function processUser(name,callingFunc){
//   return callingFunc(name)
// }
// console.log(processUser("Simran",greet));

// //return func from another func
// function mul(factor){
//   return function(number){
//     return number*factor
//   }
// }
// const double=mul(2)
// console.log(double(5))

//build in function
//1.map()
const number=[1,2,3];
const doubled=number.map(num=>num*2);
console.log(doubled);

//2.filter()
const evens=number.filter(num=>num%2==0);
console.log(evens);

//3.reduce()
const sum=number.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

