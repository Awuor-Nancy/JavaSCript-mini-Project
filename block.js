// function goods(){
//     let good = "pasta";
//     console.log(good);

// }
//function scope works best when you use var
// function kids(){
//     const name = "Jessy";
//     var age = 20
//     let school = "consolata"
// }
// console.log(name);
// console.log(age);
// console.log(school);

//nested finction
// function num(){
//     var a = 2;
//     function add(){
//         var b = 3;
//         var c =a+b;
//         console.log(c)
//     }
//     num();
// }
// add();

//closure functions
var num = [1,2,3,4,5,6,7];
for(let i = 0; i < num.length;i++){
    console.log(num[i]);
}

//hoisting 
add(8);
function add(){
    var a = 10;
    console.log(a);
}

//strict mode forces you follow JS rules 
"use strict"
let meal = "chapo";
let numb = '10';
console.log(num,meal);

//ternary operator
var people = 30;
let c = (people < 50)? true : false;
console.log(c);

function reverse(str){
    let newStr = " ";
    for(let a = str.length-1; a >= 0; a--){
        newStr += str[a];
    }
    return newStr;
}
let result = reverse("I am AkiraChix");
console.log(result);


//Roman numbers
const romanNumeral = () =>{
    const numeral = "MCMXCIV";
    const romainInt = {
        I: 1,
        V: 5,
        X: 10,
        M: 1000,
        C: 100,
        L: 50,
        D: 500,
    }
    let i = 0;
    let total = 0;
    while(i < numeral.length){
        const currentNum = numeral.length[i];
        const nextNum = numeral.length[i + 1];

        if(currentNum < nextNum){
            total = total + (currentNum - nextNum);
            i = i + 2;
        } else{
            total = total + currentNum;
            i++;
        }
    }
    return total;
}
let res = romanNumeral();
console.log(res);

//CONFIRM THE ENDING/String
    var word = "I'm running";
    console.log(word.substring(0,5));  //index 0-5
    console.log(word.substring(4));
    console.log(word.substring(0,6));
    console.log(word.substring(-8)) //last 5 numbers

    //slice and ends with(substring)
      function endsWith(str,target){
        if (str.substring(-target.length) ===target){
            return true;
        }else
        return false;
      }
      const disp = endsWith("nancy","nan");
      console.log(disp);

     // multyplying strings
      function repeatStrtimes(str,num){
        var final = "";
        for(let i = 0; i < num; i++){
            final += str;
        }
        return final;
      }
      let reslt = repeatStrtimes("Akira",5);
      console.log(reslt);//prints akira 5 times

//recursion  calling a function inside a loop

//truncating string
function isArray(){

}

function getElement(n){
    let news = " ";
    for(let i = 0;i < n; i++){
        news += i;
    }
    return news;
 }
 let ans = getElement("banana");
 console.log(ans);


 function get(str){
    let x = " ";
    if(x < str){
        console.log(str[0]);
    }
}
get("meal");

         //objects in JS  sort object
         const person =[{
            name : "John Doe",
            title : "manager",
            id : 2134,
            age : 20,
             },

         {  name : "Atuire Barmna",
             title : "student",
             id : 5104,
             age : 27,
            },

            {  name : "joy",
             title : "student",
             id : 1104,
             age : 23,
            },

        ];
        let x = person.sort((a,b) =>{
           if(a.age > b.age)
           return -1;

           else if(a.age < b.age)
           return 1;

           else{
            return 0;
           }})
           console.log(person);

           function factorials(num){
            let newz = 1;
            for(let i = 1; i <= num; i++)
            newz = newz * i;
            return newz;
         }
         let displ = factorials(6);
         console.log(displ);

        //reversing in JS
       
        function reverse(nums){
            let namba = [3,5,8,9,1,6];
            let emp = [];
            if(namba.length > 1){
                let left = 0;
                let right = nums.length -1     
                while(left > right){ 
                nums[left],nums[right] = nums[right],nums[left];
                left++;
                right--;
                emp.push(namba)
              
                }    
            }
            return namba;
           
        }
            let ret = reverse();
             console.log(ret);

         
        



















