/*
    for(let i=0;i<5;i++){

    }
    console.log(i);
    //var : 5
    //let : ReferenceError: i is not defined
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using let keyword
*/

/*
    let data = 100;
    let data = 200;
    console.log(data);
    //var : 200
    //let : SyntaxError: Identifier 'data' has already been declared

    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/

/*
    function func_one(){
        if(true){
            var x = 10;
            let y = 20;
        }
        console.log(x);             //10
        console.log(y);             //ReferenceError: y is not defined
    }
    func_one();
    //var contain function scope
    //let contain block scope
*/

/*
    console.log(data);
    let data = 100;
*/

//var : undefined
//let : ReferenceError: Cannot access 'data' before initialization

//variable hoisting issue raised because of var keyword
//we can overcome variable hoisting by using let keyword

//acccessing variable before its declaration and initilization called as "variable hoisting"

/*
                    var                         let
    var keyword introduced          let keyword introduced in
    in ES1 Version                  ES6 version

    global polluting issue          we can overcome global polluting
    raised because of var           issue by using let keyword
    keyword

    var keyword allows the          let keyword wont allows the
    duplicate variables             duplicate variables

    var members are functional      let members are block scope 
    scope members                   members

    variable hoisting raised        we can overcome variable hoisting
    because of var keyword          with let keyword
*/


//const
//keyword
//ES6
//reinitilization not possible
const data = 100;
//data = 200;
//TypeError: Assignment to constant variable.

const str = "ReactJS";
//str = "ReactJS 18.X";
//TypeError: Assignment to constant variable.

const arr = [10,20,30,40,50];
//arr = [100,200,300,400,500];
//TypeError: Assignment to constant variable.

//arr = [];
//TypeError: Assignment to constant variable.

arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
arr[5] = 600;
console.log(arr);
//[ 100, 200, 30, 40, 500, 600 ]


const arr1 = ["java","dot net","php"];
//arr1 = [];

arr1[0] = "ReactJS";
arr1[1] = "Angular";
arr1[2] = "VueJS";
console.log(arr1);
//[ 'ReactJS', 'Angular', 'VueJS' ]


const obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};

//obj = {};

obj.key1 = "welcome_1";
obj.key3 = "welcome_3";
obj.key4 = "welcome_4";
console.log(obj);


























