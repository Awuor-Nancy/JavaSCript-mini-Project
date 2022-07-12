let name = "Nancy";
if (name){
    console.log("hey there");
    if (name.length <= 3){
        console.log("Name is too short");
    }
} else{
    console.log("you are not incuded");
}

let x = 20;
if (x < 30 && x > 20){
    console.log(true);
}else{
    console.log(false);
}

//switch
let a = 20;
switch(a){
    case 10:
        console.log('${a} is less that 20')
        break

        case 20 :
            console.log('${a} is equal to 20')
          break
          
          default:    //else
          console.log('its neither the numbers')

          }
          //Ternary Operators
          const b = 20;
          let z = a > 20 ? true: false;
          console.log(z);

          //convert celcius to farenheit
          function convertToF(celsius) {
            let fahrenheit = (celsius * 9/5) + 32;
            return fahrenheit;
          }
          let display = convertToF(30);
          console.log(display);

          //Reversing strings in JS
          function reverseString(str) {
            let newString = "";
           for(let i = str.length-1; i >= 0; i--){
            newString += (str[i]);
             
           }
          return newString;
         }
         let result = reverseString("hello");
         console.log(result);

         function rev(str){
            let rever = "";
            for(let i = str.length-1;i >= 0; i--)
            rever += str[i];
            return rever;
         }
         let reslt = rev("Nancy");
         console.log(reslt);

         //factorials in JS
         function factorials(num){
            let newz = 1;
            for(let i = 1; i <= num; i++)
            newz = newz * i;
            return newz;
         }
         let disp = factorials(6);
         console.log(disp);

         //palindrome in js
         function palindrome(str){
            let reverzed = str.split(" ").reverse().join(" ");
            if(reverzed === str) return true

            else return false
         }
         let diSplay = palindrome("madam");
         console.log(diSplay);

         //finding length of the longest word in a string
         
         function findLongest(str){
           let words = str.split(" ");
           let longest = "";
           for(let x of words);{
            if(x.length > longest.length) longest = x;
            
           }
          
           return longest.length;
        }
        let out = findLongest("I have the best JavaScript coding skills");
        console.log(out);

        //titleCase a string
        
     // Loops
    //  function goods(item){
    //    return 1;
    //    let output = 0;
    //    if(first > last){
    //      first = goods[0];
    //      last = goods[1];
    //      for(let i = fisrt;i < last; i++){
    //        output += i
    //      }
    //      return output;
    //    }
    //  let see = goods([1,4]);
    //   console.log(see);

    let names = "Nancy";
if (name){
    console.log("hey there");
    if (name.length <= 3){
        console.log("Name is too short");
    }
} else{
    console.log("you are not incuded");
}

//let numz = 0;
//if (add < 30 && a > 20){
  //  console.log(true);
//}else{
  //  console.log(false);
//}
//switch

let m = 20;
switch(a){
    case 10:
        console.log('${a} is less that 20')
        break

        case 20 :
            console.log('${a} is equal to 20')
          break
          
          default:    //else
          console.log('its neither the numbers')

          }
          //Ternary Operators
          const y = 20;
          let n = (a > 20 ? true: false);
          console.log(n);

          //labels
          //Ternary Operators
          const w = 20;
          let v = w > 20 ? true: false;
          console.log(v);

          function isLeap(years){ 
          for(let i = 2012; i < 2022; i++){
            console.log(i);
          }
          isLeap();
        }

          let listName = ["Elly","Nancy","Joyce"];
          let food = ["Pasta","Chicken","Sugarcane"]

          for(let i = 0; i <= listName.length;i++){
            
            for(let j= 0; j<food.length;j++){
                console.log(listName[i],food[j]);

                continue
            }     
          }

         // factorialize a number
            function factorialize(num) {
                let sum = 1;
                for(let i = 1; i <= num; i++){
                  sum = sum * i;
                
                } 
                 num = sum;
                return num;
              }
              
              let output = factorialize(5);
              console.log(output);
         }

         //filtering in JS
          let ages = [21,54,16,25];
         let checkAdult = age =>{
            return age >= 18;
         }
         let vee = ages.filter(checkAdult);
         console.log(vee);

         //CONCATINATING ARRAYS
         const arr1 = ["Cecilie", "Lone"];
         const arr2 = ["Emil", "Tobias", "Linus"];
         const arr3 = ["Robin"];
         let kons = arr1.concat(arr2,arr3);
         console.log(kons);

         //constructor
         const fruits = ["Banana", "Orange", "Apple", "Mango"];
         let text = fruits.constructor;
         console.log(text);

         function Student(first, last){
            this.firstName = first;
            this.lastName = last;
         }
         let user1 = new Student("john","otieno");
         console.log(user1);
         let user2 = new Student ("Ameli","jane");
         console.log(user2);

         //reversing in JS
         const fruit = ["Banana", "Orange", "Apple", "Mango"];
         let t = [];
         for(let i = fruit.length-1; i >= 0; i--){
            t.push(fruit[i]);
           
         }
         console.log(t);





    

          
        
        

          


          


          


          

