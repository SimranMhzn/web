//No 1
// console.log("Hello World");

//No 2
// let name="ram";
// let num=10;
// let temp;
// let condition=true;
// let value=null;
// console.log("Type of ram is",typeof(name));
// console.log("Type of num is",typeof(num));
// console.log("Type of condition is",typeof(condition));
// console.log("Type of value is",typeof(value));
// console.log("Type of temp is",typeof(temp));

//No 3
// const pi=3.14;
// function outside(){
//   var num1=15;
//   inside();
//   function inside(){
//     let num2=15;
//     console.log("The sum of",num1,"from outside the function and",num2,"from inside the function is",num1+num2);
//   }
// }
// outside();

//No 4
// let num1=15;
// let num2=5;
// console.log("Sum:",num1+num2);
// console.log("Sub:",num1-num2);
// console.log("Mul:",num1*num2);
// console.log("Div:",num1/num2);
// console.log("Mod:",num1%num2);

//No 5
// let num=prompt("Enter a number: ");
// if(num%2==0){
//   console.log("The number is even.");
// }
// else{
//   console.log("The number is odd.");
// }

//No 6
// let age1=prompt("Enter age of person one:");
// let age2=prompt("Enter age of person two:");
// if(age1>age2){
//   console.log("Person one is older.");
// }
// else{
//   console.log("Person two5 is older.");
// }

//No 7
// let num1=prompt("Enter number one: ");
// let num2=prompt("Enter number two: ");
// let num3=prompt("Enter number three: ");
// if(num1>num2){
//   if(num1>num3){
//     console.log(num1,"is greater.");
//   }
//   else{
//     console.log(num3,"is greater.");
//   }
// }
// else{
//   if(num2>num3){
//     console.log(num2,"is greater.");
//   }
//   else{
//     console.log(num3,"is greater.");
//   }
// }

//No 8
// let num1=prompt("Enter number one: ");
// let num2=prompt("Enter number two: ");
// let choice=Number(prompt("Enter your choice: \n 1. Addition \n 2. Substraction \n 3. Multiplication \n 4. Division"));
// switch(choice){
//   case 1:
//     console.log("Sum:",num1+num2);
//     exit(0);
//   case 2:
//     console.log("Sub:",num1-num2);
//     exit(0);
//   case 3:
//     console.log("MUl:",num1*num2);
//     exit(0);
//   case 4:
//     console.log("Div:",num1/num2);
//     exit(0);
//   default:
//     console.log("Your choice is invalid.");
// }

//No 9

//No 10
let age=prompt("Enter your age: ");
let test=prompt("Have you passed the test?");
test=test.toUpperCase();
if(age>18&&test=="YES"){
  console.log("You are eligible for a driving license.");
}
else{
  console.log("You are not eligible for a driving license.");
}
