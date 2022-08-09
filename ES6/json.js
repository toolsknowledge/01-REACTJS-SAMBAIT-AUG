//JSON
//JSON Stands for Java Script Object Notation
//JSON also called as JavaScript Objects
//JSON used to transfer the data over the Network
//JSON is light weight
//Objects --- {}
//Arrays  --- []
//Data    --- key & value pairs
//key & value separated by using ":"
//key & value pairs separated by using ","

/*
    let obj = {
        "key1" : "ReactJS",
        "key2" : "NodeJS",
        "key3" : "MongoDB"
    };

    //dot operator
    console.log(obj.key1, obj.key2, obj.key3);          
                                //ReactJS NodeJS MongoDB

    //[] operator
    console.log(obj["key1"],obj["key2"],obj["key3"]);
                                //ReactJS NodeJS MongoDB
    //for....in loop
    for(let key in obj){
        console.log(obj[key] );
    }                           //ReactJS NodeJS MongoDB

    //Destructuring
    //ES6
    let {key1,key2,key3} = obj;
    console.log(key1,key2,key3);    //ReactJS NodeJS MongoDB    
*/
/*
    let obj = {
        "key1" : "Hello_1",
        100 : "Hello_2",
        true : "Hello_3",
        undefined : "Hello_4",
        null : "Hello_5" 
    };
    console.log( obj["key1"], obj[100], obj[true], obj[undefined], obj[null]);
    //Hello_1 Hello_2 Hello_3 Hello_4 Hello_5
*/

/*
    let obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    delete obj.key3;
    console.log(obj);           //{ key1: 'Hello_1', key2: 'Hello_2' }
*/




/*
    let obj1 = {
        "key1" : "Hello_1"
    };
    let xeroxObj1 = {...obj1};
    obj1.key2 = "Hello_2";
    xeroxObj1.key2 = "Welcome_2";
    console.log(obj1);          //{ key1: 'Hello_1', key2: 'Hello_2' }
    console.log(xeroxObj1);     //{ key1: 'Hello_1', key2: 'Welcome_2' }
*/

/*
    let obj1 = {
        "key1" : "hello_1",
        "key2" : "hello_2",
        "key3" : "hello_3"
    };

    let obj2 = {
        ...obj1,
        "key4" : "hello_4"
    };

    let obj3 = {
        ...obj2,
        "key5" : "hello_5"
    }

    console.log(obj1);             
    console.log(obj2);              
    console.log(obj3);              
*/


/*
    let obj1 = {
        "key1" : "hello_1"
    };
    let obj2 = {
        "key2" : "hello_2"
    };
    let obj3 = {
        "key3" : "hello_3"
    };
    let obj4 = {...obj1,...obj2,...obj3};
    console.log(obj4);              
                //{ key1: 'hello_1', key2: 'hello_2', key3: 'hello_3' }
*/

/*
    let obj = [
        {p_id : "p101", p_name : "p_one", p_cost : 10000},
        {p_id : "p102", p_name : "p_two", p_cost : 20000},
        {p_id : "p103", p_name : "p_three", p_cost : 30000},
        {p_id : "p104", p_name : "p_four", p_cost : 40000},
        {p_id : "p105", p_name : "p_five", p_cost : 50000}
    ];
    //forEach()
    obj.forEach(element=>console.log(element.p_id, element.p_name, element.p_cost));
*/

/*
    let obj = [
        {p_id : "p101", p_name : "p_one", p_cost : 10000},
        {p_id : "p102", p_name : "p_two", p_cost : 20000},
        {p_id : "p103", p_name : "p_three", p_cost : 30000},
        {p_id : "p104", p_name : "p_four", p_cost : 40000},
        {p_id : "p105", p_name : "p_five", p_cost : 50000}
    ];

    console.log(
        obj.filter(element=>element.p_cost >= 40000
        ).map(element=> { return {"p_id":element.p_id, "p_name": element.p_name}
        })
    );
*/

/*
    let obj1 = {
            obj1 : {
                obj1 : {
                    "key1" : "Hello"
                }
            }
    };
    let {obj1:G1} = obj1;
    let {obj1:G2} = G1;
    let {key1} = G2;
    console.log(key1);          //Hello
*/


let obj = {
    key1 : "Hello_1",
    key1 : "Hello_2"
};
console.log(obj);           //{ key1: 'Hello_2' }




























































































