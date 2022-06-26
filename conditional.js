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
            for(let i = 1; i<=num; i++)
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


          


          

