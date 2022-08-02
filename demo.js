console.log("welcome to javascript");
console.table([10,20,30,40,50]);
console.log( 10+10 );           //20
console.log( 10+ +"10");        //20
console.log( 1+ +"2"+ +"2" );   //5
console.log( 10 - "10" );       //0
console.log( 10 * "10");        //100
console.log( 10 / "10"  );      //1
console.log( 10 / "A" );        //NaN
console.log( 10 / "0" );        //Infinity

//true ---- 1
//false ---- 0
console.log(true+true);         //2
console.log(true+false);        //1
console.log(true/false);        //Infinity
console.log(1+"true");          //1true

//=      (assignment)
//==     (comparision)         (values)
//===    (strict comparision)  (values with datatype)

console.log( 10 == "10" );      //true
console.log( 10 === "10" );     //false
console.log( 10 == "ten" );     //false
console.log( 10 === "ten" );    //false
console.log( (0.1+0.2) == 0.3 );   //false
//0.3000000000004
//JavaScript is more precious while performing arthemetic operations


console.log(10>9>8);            //false       






















