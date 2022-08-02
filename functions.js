//business logic called as function
//reuse business logic
//1) named functions
//2) anonymous functions
//3) arrow functions

//the function with "user defined name" called as named function
/*
    Syntax

    1) function definition

    2) function calling

*/

/*
    function func_one(){
        console.log("welcome to functions");
    }

    func_one();
    //welcome to functions
*/

/*
    function func_one(param1,param2,param3){
        console.log(param1,param2,param3);  
    }
    func_one("Hello_1","Hello_2","Hello_3");
    //Hello_1 Hello_2 Hello_3
    func_one(100,200,300,400);
    //100 200 300
    func_one();
    //undefined undefined undefined
    func_one(undefined,"Hello_2");
    //undefined Hello_2 undefined
*/


/*
    function func_one(...param1){
        console.log(param1);
    }
    func_one(100,200,300,400,500);
    //[ 100, 200, 300, 400, 500 ]

    func_one();
    //[]

    func_one("hello_1");
    //[ 'hello_1' ]

    func_one(undefined,undefined);
    //[ undefined, undefined ]

    func_one(undefined,null,undefined,400);
    //[ undefined, null, undefined, 400 ]
*/


/*
    function func_one(...param1,...param2){

    }
    //we can pass only one spread operator per function
*/



/*
    function func_one(param1,...param2){
        console.log(param1,param2);
    }
    //spread operator always should be last in occurances

    func_one();             //undefined []
    func_one(100,200);      //100 [ 200 ]
    func_one(100,200,300);  //100 [ 200, 300 ]
*/


/*
    //default parameters in functions
    //ES6
    function func_one(param1="Hello_1",param2="Hello_2",param3="Hello_3"){
        console.log(param1,param2,param3);
    };

    //func_one();                                       //Hello_1 Hello_2 Hello_3
    //func_one("Welcome_1");                            //Welcome_1 Hello_2 Hello_3
    //func_one(undefined,undefined,undefined);          //Hello_1 Hello_2 Hello_3
    //func_one(null,null,null);                         //null null null
*/


/*
    function func_one(param1,param2="Hello_2",...param3){
        console.log(param1,param2,param3);
    }
    //func_one();             
    //undefined Hello_2 []

    //func_one("Hello_1");
    //Hello_1 Hello_2 []


    //func_one("Hello_1",undefined,"Hello_3");
    //Hello_1 Hello_2 [ 'Hello_3' ]


    func_one(100,undefined,200,300,400);
    //100 Hello_2 [ 200, 300, 400 ]

    func_one(null,null,null);
    //null null [ null ]
*/



/*
    //the function without name called as anonymous function
    let func_one = function(){
        console.log("welcome to anonymous functions");
    }
    func_one();
    //welcome to anonymous functions
*/

/*
    let func_one = function(param1,param2,param3){
        console.log(param1,param2,param3);
    };
    func_one(100,200,300);                                  //100 200 300
    func_one();                                             //undefined undefined undefined
    func_one("Hello_1","Hello_2","Hello_3","Hello_4");      //Hello_1 Hello_2 Hello_3
*/


/*
    let func_one = function(param1,param2="Hello_2",...param3){
        console.log(param1,param2,param3);
    };
    func_one();                                     //undefined Hello_2 []
    func_one("Hello_1",undefined,"Hello_3");        //Hello_1 Hello_2 [ 'Hello_3' ]
    func_one(undefined,undefined,undefined);        //undefined Hello_2 [ undefined ]
    func_one(null,null,null);                       //null null [ null ]
*/


/*
    let func_one = function(){
        return "welcome to anonymous functions";
    };
    let res = func_one();
    console.log(res);
    //welcome to anonymous functions
*/


/*
    //typeof
    console.log(typeof "Hello");                //string
    console.log(typeof 100);                    //number
    console.log(typeof true);                   //boolean
    console.log(typeof undefined);              //undefined
    console.log(typeof null);                   //object
    console.log(typeof []);                     //object
    console.log(typeof {});                     //object
    console.log(typeof function(){});           //function
*/



//JSON
//Java Script Object Notation
//used to transfer the data over the network
//json is light weight
//objects --- {}
//arrays  --- []
//data    --- key & value pairs

/*
    let obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    console.log( obj.key1, obj.key2, obj.key3 );
    //Hello_1 Hello_2 Hello_3
*/
/*
    let obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : function(){
            return "Hello_3";
        }
    };
    let res = obj.key3();
    console.log(res);               //Hello_3
*/

/*
    let obj = {
        key1 : "",
        key2 : "",
        key3 : function(){
            let inner = ()=>{
                this.key1 = "Hello_1";
                this.key2 = "Hello_2";
            }
            inner();
        }
    };
    obj.key3();
    console.log( obj.key1, obj.key2 );
    //Hello_1 Hello_2
*/

/*
    let func_one = ()=>{
        console.log("welcome to arrow functions");
    }
    func_one();
    //welcome to arrow functions
*/

/*
    let func_one = ()=>{
        return "welcome";
    };
    let res = func_one();
    console.log(res);               //welcome
*/
/*
    let func_one = ()=>"Hello";
    let res = func_one();
    console.log(res);               //Hello
*/

/*
    let networkCall = (successCallBack,errorCallBack)=>{
        let res1 = successCallBack();
        let res2 = errorCallBack();
        console.log( res1, res2 );
    };
    networkCall( ()=>{
        return "Success";
    }, ()=>{
        return "Error";
    } );
    //Success Error
*/


/*
    let func_one = (param1,param2="Hello_2",...param3)=>{
        console.log(param1,param2,param3);
    };
    func_one();                             //undefined Hello_2 []
    func_one("Hello_1");                    //Hello_1 Hello_2 []
    func_one("Hello_1",undefined,"Hello_3");//Hello_1 Hello_2 [ 'Hello_3' ]
    func_one(undefined,undefined,undefined);//undefined Hello_2 [ undefined ]
    func_one(null,null,null);               //null null [ null ]
*/












































































































































































































































