var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
function random(arr){
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].type == "dog"){
      sum = arr[i].age + sum;
      
    }
  }
  return 7*sum;

}
// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
function random(arr){
  let sum = 0;
  data = data.filter((elem) => elem.type=="dog");
  for(let i=0;i<arr.length;i++){
    sum = arr[i].age + sum;
  }
  return sum*7;

}


// 2. map - to multiply human year to dog year

function random(arr){
  let sum = 0;
  data1 = arr.filter((elem) => elem.type=="dog");
  data2 = data1.map((elem) => (elem.age)*7);
  for(let i=0;i<data2.length;i++){
    sum = data2[i] + sum;
  }
  return sum;
}

// 3. reduce - to accumulate total age.

data.reduce((acc,cv)=>{
  if(cv.type=="dog"){
    acc = acc + cv.age*7;
  }
  return acc;
},0);

// Solution 105
