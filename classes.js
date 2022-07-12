          //Arrays
            let x = ["tomato","mango","cherry","cheese"];
            let a = new Array("mango","apple","orange");
            console.log(a);
            console.log(x);
            x.unshift("grapes");
            a.shift("tomato");
            x.pop();
            
                         //mappping
            let n = new Array("mango","apple","orange");
             let d = n.map(item => `I love ${item}`)
             console.log(d);
            
            //call back functions called when youre ready for it.
            function people(){
                console.log("you guys");
            }
            
            function students(a,callback) {
                console.log(a);
                console.log(callback);
            }
            students(26,people);
            
             //splice removing items with indexes.
            let l = new Array("mango","apple","orange");
            console.log(l.splice(0,2));
            
            //   Objects
            let People = {
                name : " Alice",
                age : 20,
                country : "Asia",
                role : "administrator"
            
            }
            console.log(People.country);
            console.log(People.role);
            
                       // ceating instances of an object
            var person = new Object(People);
            console.log(person.name);
            
                       //adding propertiest to the child class
            person ["age"] = 35;
            person["salary"] = 50000;
            console.log(person);
            
            for ([key,values] of Object.entries(person)) {
                console.log(`${key}:${values}`);
            }
            
            //   freezing objects you cant change nor modiy
            //   seal  can modify an object but not change it
            //   Asign method.
            //   A method is a property whose value is a function.
            var student = {
                name : "Anita",
                country : "United States",
                hobby : function (){
                    console.log("My name is " + this.name + "I love eating and my hobby is baking");
                    return "i  am funny";
                },
                // Nested objects.
                   friends: {
                    name :"Joy",
                    age : 30,
                    hobby : {
                        first: "cooking",
                    }       
                }
            }
                console.log(student.country);
                console.log(student.hobby());
                console.log(student.friends.first);
                console.log(student.friends.hobby);
            
                      // Classes
                class Student{
                    constructor(name, country,age,school){
                        this.name = name;
                        this.country = country;
                        this.age = age;
                        this.school = school;
                    }
                }
                    //creating  instance of a class new attribute from student class
                 var firstStudent = new Student("Joana", "Diani",20,"AkiraChix");
                 console.log(firstStudent);
                 console.log(firstStudent.age);
                 
            
                    //  adding prototypes in the constructor adding new methods
                    Student.prototype.country = function(){
                        return "I love my country";
                    }
                    let log = new Student("I love you mama");
                    console.log(log);
                    
            
                    //  FUNCTION CONSTRUCTOR function name starta with a capital letter
                    function Guests(name,age,country){
                        this.name = name;
                        this.age = age;
                        this.country = country;
                        this.hobby = function (){
                            return " I love dancing";
                        }
                    }
                    var secondStudent = new Guests("Anitamo","Diani","21");
                    console.log(secondStudent);
            
                     // destructuring function
                    var names = ["Chiri","zipporah","Nancy","Zach"];
                    var [conslate,...others] = names;
                    console.log(conslate);
                    console.log(others);
            
                    var namez = ["Chiri","zipporah","Nancy","Zippy"];
                    var m = ["mishy","jemy","Nancy","Zach"];
                    console.log("mishy");
                    console.log("Shemy");
                    console.log("bryo");

                    //call back function
                    setTimeout(() =>{
                    console.log("waited for 4 seconds");
                    }, 3000)

                    setTimeout(() =>{   
                        console.log("waited for 2 seconds");
                    }, 2000)

                        setTimeout(() =>{   
                            console.log("waited for 1 second");
                        }, 1000);


                //         //classes
                //         let goods = {
                //             name : "Orange",
                //             price : 30,
                //             quantity : function(){
                //                 console.log('I want to buy' +  this.name, at + this.price * 2);
                //                 return "than you";       
                //         }
                //     }
                //     console.log(2 * this.price);

                //     class KioskCal {
                //         constructor(name, quantity) {
                //             this.name = "orange";
                //             this.quantity = 50;
                //             this.fruitsPrice:
                //     }
                // }

                    // Array Objects
                    let nana = [
                        {   name : 'Nancy',
                            age : 21,
                            country : 'Kenya',
                        },
                        {   name : 'Alison',
                            age :12,
                            country : 'Tanzania'
                        },
                        {   name : 'Danny',
                            age : 26,
                            country : 'United States'
                        }
                    ];
                    //print alison's age
                    console.log(nana[1].age);

                    //mapping
                    nana.map(x => console.log(x.age)); 

                    // filter
                  let b =  nana.filter(item => item.age >= 20)
                  console.log(b);

                  //find
                  let p = nana.find(item => item.name === "fuffy")
                  return p;
                  console.log(p);

                  // function as values
                  function identity(){
                    console.log("my name is this.name");
                  }


                
                  



            
            
            
            
            
            
            
            
            
            
            
            