//create a for loop that counts backwards in step of 3 from 102 to 27
// let arr = [];
// for(let i = 102; i>=27; i-=3){
// arr.push(i)
// }
// console.log(arr)
//**********************
// let arr = [];
// for(let i = 3; i<=12;  i++){
//   arr.push(i);
// }
// console.log(arr);
///******************
// let A = 65 ;
// if(A>15 && A<50 || A<30 && A>0){
//   console.log('A is greater than 15 and less than 30');
// }else{
//   console.log("not greater");
// }

//******************

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(i = 0; i < arr.length; i ++) {
//   if(arr[i]>=2 && arr[i]<=8){
//      console.log(arr[i])
//   }
// }
// function testLogicalAnd(val) {
//   // Only change code below this line

//   if(val<=50 && val>=25) {
//       return console.log("Yes");
//   }

//   // Only change code above this line
//   return console.log("No");
// }

// testLogicalAnd(45);

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val<3 || val>7) {
//     return console.log("Outside");
//   }

//   // Only change code above this line
//   return console.log("Inside");
// }

// testLogicalOr(4);

// let team = "Microverse";
// A = team.substring(1,6);
// console.log(A)

// let employee = ["billal","Parvin","Hamza"]
// console.log(employee.includes("Shakil"));

// let employee = ["billal", "Parvin", "Hamza"]
// if (employee.includes("billal") === true) {
//   console.log("Right person!");
// }
// else {
//   console.log("Wrong person!");
// }
//#############
// let employee = ["billal", "Parvin", "Hamza"];
// let search = "billal";
// if (employee.includes(search) === true) {
//   console.log("Right person!");
// }
// else {
//   console.log("Wrong person!");
// }

// let employee = [1,2,3,4,5,6,7,8,9,10]
// let search = "13";
// if (employee.includes(search) === true) {
//   console.log("Found it");
// }
// else {
//   console.log("Not Found");
// }

//#######################

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let small = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 4 && numbers[i] <= 9) {
//     small.push(numbers[i])
//   }
// }

// console.log(small);
//#####################nested array-ex-8

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[2][1])

for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[i][j])
  }
}


