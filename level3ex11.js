//exercise-11########

function multArr(arr){
  let newer = [];
  for(let i =0; i<arr.length; i++){
    newer.push(arr[i]*5)
  }
  return newer;
}
let result = multArr([1,2,3,4,5]);
console.log(result);
