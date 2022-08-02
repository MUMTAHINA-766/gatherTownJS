//exercise-12########


function rev(arr) {
  output = [];
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 1) {
      output.push('one');
    }
    else if (arr[i] == 2) {
      output.push("two");
    }
    else if (arr[i] == 3) {
      output.push("three");
    }
    else if (arr[i] == 4) {
      output.push("four");
    }
  }
  return output;
}
// let reverse = rev([1,2,3,4])
// let reverse_1 = rev([4,1,1,2])
let reverse_2 = rev([1, 2, 1, 2])
console.log(output);
