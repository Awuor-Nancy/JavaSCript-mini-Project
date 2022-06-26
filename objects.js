// const person = {
//     firstName:"Damian",
//     lastName: "Junior",
//     age : 3,
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age)

// // Lists
// const oddNumbers = [1,3,5,7,9];
// console.log(oddNumbers[0]);
// console.log(oddNumbers[2]);

// const name = "Nancy";
// const Salary = 100000;
// const city = "Nairobi";
// console.log(name);
// console.log(Salary);

//   //ternanry operator  if = ?
//   const isEven = 10 % 3 !== 0 ? "number is even": "number is odd";
//   console.log(isEven);

//   //Type conversions
//   //implicit conversion...JavaScript converts the type automaticaly.
//   //explicit conversion ..user normally converts the type

//   //implicit
//   console.log(2 + '3');
//   console.log(true + '10');
//   console.log('8' + '2');
//   console.log('4' - '2');

//   console.log(5 - true);
//   console.log(8 - false);
//   console.log(9 + null);

//   //converting
//   console.log(Number('5'));
//   console.log(Number(''));
//   console.log(Number(false));
//   console.log(Number(true + true));

//   //convert between types
//   console.log(parseInt(2));
//   console.log(parseFloat(10.9));
//   console.log(String("500"));

//   console.log((500).toString());
//   console.log(Boolean(10));

//   const num = 5;
//   if(num > 0){
//     console.log("number is positive");
// }else if(num < 0){
//         console.log("number is negstive");
//     } else {
//     console.log("number zero");
//   }

//   const color= "red"
//   switch(color){
//     case "red":
//         console.log("color is red")
//         break

//         case "blue":
//             console.log("color is blue");
//             break

//             case "green":
//                 console.log("color is green")
//                 break

//                 default:
//                     console.log("not a matching color")       
//   }

//   // Looping in Js. repeat blocks of code
//   //for loop , while loop,do while loop, for of loop

//   //for Loop
//   for(let i = 1; i <=5; i++){
//     console.log( "looping numbers " + i); 
//   }

//   //while loop
//   let nums = 1;
//   while(nums <= 5){
//     console.log(nums);
//     nums++;
//   }

//   // while loop...executed atleast once
// //   let i = 6;
// //   do{
// //     console.log(i);
//    i-=1
// //   } while(1 <= 5)

//   // for ... of Loop
//   const numArray = [5,7,9,11,13];
//   for (const num of numArray){
//     console.log(num);
//   }

//   const list = [5,6,7,8,9,10];
//   const list2 = [];
//   for(let i = 0; i <= 10; i+=1){
//     list2.push(list[i]);
   
//   }
//   console.log(list2); 

//   let i = 1;
//   while(i <= 10){
//     console.log(i);
//     i++;
//   }
 
//   //functions
//   function greet (){
//     let name = "Joash";
//     console.log("Good morning " + name + " how are you?");
//   }
//   greet();
  
//   function add (a,b){
//     let sum = a + b;
//     console.log(sum);
//   }
//   add(10,6);
//   add(20,9);
//   add(23,14);

//   let numbz = 50;
//   function total(){
//     numbz = 30;
//     console.log(numbz);
//   }
//   total(40);

//   //Function scopes
//   //let and const can only be declared inside te scope 
//   if(true){
//     const myName = "Kiki";
//     console.log(myName);
//   }

//   //Nested Functions
//   let a = 10;
//   function outer(){
//     let b =20;
//     function inner (){
//         let c = 30;
//         console.log(a,b,c);
//     }
//     inner();
//   }
//   outer();

//   //closure...combination of functions put together.
  
//   function out(){
//     let counter = 0;

//     function inter(){
//         let counter = 1;
//         console.log(counter);
//         counter += 1
//     }
//     inter();
//   }
//   out();
//   out();
// //   let input = inter();
// //   console.log(input);
// //   let display = out();
// //   console.log(display);

// // function curryng
// function sum (a,b,c){
//     return a + b + c;
// }
// console.log(sum(2,4,7));
// function curry(fn){
// return function(a){
//     return function(b){
//         return function(c){
//             }
//         }
//     }    
// }
// const curried = curry(sum);
// console.log(curried(2)(3)(5));

 const materials = ["chairs","lockers","laptops","fan","teli"];
  for(let i = 0; i < materials.length; i++){
       console.log(materials[i]);
 }
  
// do while
let x = 0;
do{
  console.log(materials[x]);
    x++;
} while(x < materials.length)

// while loop
let i = 0;
while(i < materials.length){
   i++;
  console.log(materials);
}

for(let i = 0;i < materials.length; i++){
  console.log(materials);
  if(i === 2){
     break;
  }
}
//   let n = 0;
// while(n < materials.length){
//    console.log(materials);
//   if(n === 3){
    
//     continue;
//      n+=1; 
//   }
// }

const items =["Hair","shampoo","spray","Wig"];
const food = ["chapati","ugali","pizza","burger"];
for(i = 0; i < items ; i ++){
  for(j = 0; j < food; j++){
    console.log(items[i],food[j]);
  }
}
  //label
const itemz =["Hair","shampoo","spray","Wig"];
const foods = ["chapati","ugali","pizza","burger"];
for(i = 0; i < items.length ; i ++){
  for(j = 0; j < food.length; j++){
    if(i === 3){
      break;   //stops at the 3rd item and counts from 3rd to last
    }
    console.log(itemz[i],foods[j]);
  }
}
  //for ... of Loop
   const numArray = [5,7,9,11,13];
   for (const num of numArray){
     console.log(num);
   }

   // For in loop
   const numArrays = [5,7,9,11,13];
   for (x in numArray){
     console.log(x);
   }
   for(y in materials){
    console.log(y);
   }   

   const person = {
         fname : "john",
         age : 20,
         food : "pilau",
   }
   //loop through
   for(traits in person){
    console.log(traits);
   }

    function out(){
          let counter = 0;
    
        function inter(){
             let counter = 1;
              console.log(counter);
              counter += 1
          }
         inter();
        }
        out();
        out();

            //Nested Functions
        let a = 10;
        function outer(){
          let b =20;
          function inner (){
              let c = 30;
              console.log(a,b,c);
          }
          inner();
        }
        outer();

        

    
  










 



  

  











  






