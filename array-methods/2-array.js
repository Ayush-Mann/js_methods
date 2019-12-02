var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function longword(arr){
  var dummyw = []
  for(var i=0; i<arr.length;i++){
    if(arr[i].length > dummyw.length){
      dummyw = arr[i];
    }
  }
  return dummyw;
}

longword(words);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
//1.sumarray
function sum(numbers1){
  var sum = 0;
  for(var i=0;i<numbers1.length;i++){
    sum = sum +numbers1[i];
  }
  console.log(sum);
}
function avg(numbers1){
  var comp = Number(sum(numbers1));
  var result = comp/numbers1.length;
  console.log(result);
}
//using reduce
function sumreduce(arr){
  arr.reduce((a,b) => a+b);
}

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
var sum = 0;
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(arr){
  for(var i=0;i<numbers2.length;i++){
    sum = sum +numbers2[i];
  }
  return sum/arr.length;
  
}
averageNumbers(numbers2);


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 
// and calculate the average length of the words.
function calLength(arr){
  let totalLen = 0
  arr.forEach(element => {
    totalLen += element.length;
    return totalLen;
  });
  return totalLen/words2.length;
}


