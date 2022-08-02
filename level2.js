// //print
// let myname = "Mumtahina"
// console.log(myname)

// //variable
// // let A,B,C;
// // A = 4+7;
// // B = 5*9;
// // C = B/A;
// // console.log(C);
// //type 2
// let A ;
// A = 4+7;
// let B;
// B= 5*9;
// let C;
// C= B/A;
// console.log(C)

// //conditions 1
// let X = 32;
// if(X=9){
//   console.log("True");
// }
// else{
//   console.log("False");
// }
// //conditions 2
// let Y = "Green";
// if(Y=="Blue"){
//   console.log("Blue detected!");
// }
// else if(Y=="Green"){
//   console.log("Green detected!");
// }
// else{
//   console.log("No green or blue detected!");
// }
// // 
// let n = 60;
// if(n>45){
//   if(n<65){
//     console.log(n);
//   }

// //while loop
// let i = 2;
//   while(i<=9){
//     console.log(i);
//     i++;
//   }

//for loop
// for(i=7; i<=12; i++){
//   console.log(i);
// }

//array

// let arr = [4,5,6,7,8,9];
// console.log(arr[3]);
// console.log(arr)

//loop and array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let len = arr.length;
// for(i = 0; i < len; i++){
//   if(arr[i]<7){
//     console.log(arr[i]);
//   }
// }
// function testEqual(val) {
//   if (val == 12) { // Change this line
//     return console.log( "Equal");
//   }
//   return console.log("Not Equal");
// }

// testEqual(12);

// Setup
// function testNotEqual(val) {
//   if (val!=99) { // Change this line
//     return console.log( "Not Equal");
//   }
//   return console.log( "Equal");
// }

// testNotEqual(12);

// function testGreaterOrEqual(val) {
//   if (val>=20) {  // Change this line
//     return console.log("20 or Over");
//   }

//   if (val>=10) {  // Change this line
//     return console.log("10 or Over");
//   }

//   return console.log("Less than 10");
// }

// testGreaterOrEqual(10);

// array and while loop
// const myArray = [];
// // Only change code below this line
// let i = 0;
// while (i < 6) {
//   myArray.push(i);
//   i--;
// }
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}