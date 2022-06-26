//String,numbers,Boolenas,null,undefined
const name = "John";
const age = 20;
const isCool =true;
const rating = 4.5;  //no decimal or datatype in js..numbers
const x = null ;//Empty
const y = undefined;
let z;
console.log(typeof x) //primitive data types
console.log("hello how are you?");

//Strings
//concatenating
console.log("my name is"+ name +  "and I am" + age);
const hello= "my name is ${name} and i am ${age}";
console.log(hello);

// String properties and methods
const a = "AkiraChix";
console.log(a.length);
console.log(a.toUpperCase);
console.log(a.toLowerCase);
console.log();
console.log(a.substring(0,5));  //gives you hello
console.log(a.substring.toUpperCase);
console.log(a.split('')); // create an array

// Arrays...variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits=('apples','oranges','pears');
console.log(fruits);

//Access items using index
console.log([1]);
//add item
fruits[3] = "grapes";
fruits.push ("mangoes");  //add to the end
fruits.unshift("strawberry") ; //add to the beginning
fruits.pop();  //removes last item
console.log(Array.isArray("hello"));
console.log(fruits.indexOf(oranges));
console.log(fruits);

// Object Literals
const person = {
    firstname:"john",
    lastname:"Nancy",
    age : 22,
    hobbies :"Singing",
    city : "Nairobi",
}
//invoking
console.log(person.firstname);
console.log(person.hobbies);
console.log(person.city);
console.log(person.name.hobbies);

// destructuring  pulling items out 
// Add properties
person.email = "awuornancy@gmail.com";
console.log(person);

//todo list
const todos = [
    {
        id:1,
        text:"take lunch",
        isCompleted:true
    },

    {
        id:2,
        text:"meeting with client",
        isCompleted:true

    },

    {
        id:3,
        text:"attend onlone class",
        isCompleted:true

    }
];

// looping through the todo using for and while loop
for (let i = 0 ; i<todos.length; 1++){
    console.log('for loop number:' .length (i));

}
for(let todo of todos){
    console.log(todo);
    console.log(todo.id);
    console.log(todo.text);
}

// foEach,map,flter
//high order array methods
todo.array.forEach(function (todo) {
    console.log(todo.text);
    
});

const todo = todos.map(function (todo){
    return(todo.text);

});
 console.log(totoText)

 const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted ===true;

 });


const todoJSON = JSON.stringify

// For loops and while loops
for(let i = 0 ; i<=10; i++){
    console.log(i);
}

// while  loop 
let i = 0;
while(i<10){
    console.log(i);
    i++  ; //increament it by one and stop
}

// Conditionals

const s = 10;
const t = 21;

if(x >5  || y >10){
    console.log("x is more that 5 or y is more than 10")

}

if (x === 10){
    console.log("x is 10");

} else if(x >10){
    console.log("x is greate than 10")
} 
else {
    console.log("x is not 10")
}

//ternary operator
const c = 10;
const colour = x >10? "red":"is blue";
console.log(colour);

//Switches

switch(colour){
    case "red":
        console.log("colour is red");
        break;

        case "is blue":
            console.log("colour blue");
            break;

            default:
                console.log("colour is not red or blue")
             
}

//functions

function add_nums(num1,num2){
    return(num1+num2)
}
//invoking
console.log(add_nums( 5,5 ));

// Arrow functions
const add_nums = (num1 = 1,num2 = 1) =>(num1+num2); //has no parenthesis and no return unless you add perenthesis

console.log(add_nums(5,5));

// Object oriented Prgramming  OOP  in es5
function Person(name,lastname,Dob){
    this.name = name;
    this.lastname = lastname;
    this.Dob =Dob;

    this.getBirthyear = function(){
        return this.getBirthyear();
    }  
}
//prototypes
person.prototype.getBirthyear = function(){
    return this.Dob.getBirthyear();

}
const person1 = new person("john","Array",12-2-2001);
const person2 = new person("Auntie","Linda",21-4-1999);

console.log(person2.name .Dob .lastname);
console.log(person1.Dob);
console.log(person1.name);


// Class
class Person  {
    constructor(firstname,lastname,Dob){
        this.person = firstname;
        this.lastname = lastname;
        this.Dob = Dob;

    }
}

let person = "Nancy";
 function me (){
    let person = "nono";
    console.log(person);
 }

 // Setup
    const myArray = [];
    let i = 5;

    while(i >= 0 ){
    myArray.push(i);
    i--;

    }
    console.log(myArray)

    // Only change code below this line

let i = 0;
while(i <= 5){
  i++
  myArray.push(i);
}
console.log(myArray);


let array = [];
for(let i = 3; i <= 12; i++){
  array.push(i);
}
 console.log(array);

 
 let nums = [1,2,3,4,5,6,7,8,9,10];
let  arrays = [];
for(let i = 0; i < nums.length; i++){
  if(nums[i] >= 4 && nums[i] <= 9){
    array.push(nums[i]);
   
  // nums.push[array;
  }
}
 console.log(array);
// console.log(nums.push[array])

let num = [[1,2,3],[4,5,6],[7,8,9]];
for(let i = numbers.length -1; i >= 0; i--){
  numbers[i];
  for 
    (let j = numbers[i].length -1; j >= 0; j--){
      console.log(numbers[i][j]);
    }
}

let arrayz = [];
let b = 9;
for(let i = 0; i < 3; i++){
  let littleArrayz = [];
  
  for(let j = 0; j < 3; j++){
    arrayz.push(b);
    a--;
  }
   arrayz.push(littleArrayz)
}
console.log(arrayz);

// Objects
const person = {
     firstName: "Bruce",
     lastName: "Wayne",
     age : 30,
}
console.log(person.firstName);

