//variables are used to "store" the data
//Ex. string, number, boolean, arrays, objects.......
//we will declare the variables in 3 ways
//var, let and const
//let and const introduced in "ES6"
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables declaration should not start with "digits"
/*
    Syntax

    var/let/const variablename = value;
*/

//string
//collection of characters called as "string"
//""(double quotes)  ''(single quotes)     ``(backtick)
//``(backtick) operator called as "template literal"
//``(backtick) operator introduced in "ES6" version
//``(backtick) operator used to define the "paragraphs"
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern = `${sub_one}.....${sub_two}.....${sub_three}`;
console.log(mern);
//ReactJS.....NodeJS.....MongoDB


var my_number = 100;
console.log(my_number); 
//100



var flag = true;
console.log(flag);
//true


var my_variable;
console.log(my_variable);   
//undefined


my_variable=null;
console.log(my_variable);
//null


var arr = [10,20,30,40,50,60,70,80,90,100];
console.log(arr);


//JSON
//Java Script Object Notation
//used to transfer the data over the network
//Objects ---- {}
//Arrays  ---- []
//data    ---- key & value pairs
var obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
console.log(obj);




























