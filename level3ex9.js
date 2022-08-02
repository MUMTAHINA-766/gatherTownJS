//ex-9-##################

let bigarr = [];
let counter = 9;
for (let i = 3; i > 0; i--) {
  let smarray = [];
  for (let j = 3; j > 0; j--) {
    smarray.push(counter);
    counter--;
  }
  bigarr.push(smarray)
}
console.log(bigarr)
