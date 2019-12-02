// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var largestNumberArray = numbers.sort((a, b) => a > b ? -1:1 )
console.log(largestNumberArray[0])


// Find longest string in strings
strings.sort((a,b) => a.length - b.length);
strings.pop();





//3 Find all the even numbers
var allEvenArray = [];
numbers.forEach(function (item){
  if(item % 2 == 0){
    allEvenArray.push(item);
  }
});
console.log(allEvenArray)

//4 Find all the odd numbers
var allOddArray = [];
numbers.forEach(function (item){
  if(item % 2 !== 0){
    allOddArray.push(item);
  }
});
console.log(allOddArray)




//5 Find all the words that contain 'is' use string method 'indexOf'
for(var i = 0 ; i < strings.length; i++){
  if(strings[i].includes('is')){
    console.log(strings[i]);
  }
//6 Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(item=>item%3 == 0);
}

// 7 Sort Array from smallest to largest
numbers.sort((a,b) => a-b)

// 8Remove the last word in strings
strings.pop();

//9 Add a new word in the array((
strings.push("right");

// 10.Remove the first word in the array
strings.shift();

//11. Place a new word at the start of the array use (upshift)
strings.unshift("huge");

// 12.Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);
//splice makes changes to the original array whereas slice makes no change to the original array


//13. Make a subset of strings array ['a','collection']
strings.slice(2,4);
//14. Replace 12 & 18 with 1221 and 1881
numbers.splice(8,2,1221,1281);


//15 Replace words with string in strings array
strings.forEach(item => item.splice('strings'))

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
avg = customers.filter((item)=>
	item.firstname.includes("Joe"));
console.log(avg);

// Create new array with firstname and lastname

// Sort the array created above alphabetically
