// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const x = 1;
const y = 3; 
const item = "Pencil"; 
// const list = ["Pencil", "Notebook", "yo-yo", "Gum"];
const list = []; 

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr,cb) {
  return cb(arr.length)
  // getLength passes the length of the array into the callback.
}
getLength(items,function(length){
  console.log(length)
})


function last(arr, cb) {
  return cb(arr[arr.length-1])
  // last passes the last item of the array into the callback.
}
last(items,(last) => {
  console.log(last)
});


function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(x, y, function(sum){
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(x, y, function(product){
  console.log(product); 
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  var found = false; 
  for(var i = 0; i < list.length; i++){
    if(item === list[i]){
      found = true; 
      break; 
    }else{
      found = false; 
    }
  }
  // We have either found the item or not. 
  return cb(found); 
}
contains(item, list, function(result){
  console.log(result); 
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
