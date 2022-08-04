/*
    function func_one(param1){
        param1();
    };
    func_one( function func_two(){
        console.log("i am from callback");
    } );
    //i am from callback
*/
/*
    function func_one(param1,param2,param3){
        let res1 = param1();
        let res2 = param2();
        let res3 = param3();
        console.log(res1,res2,res3);
    };
    func_one( function f1(){
        return "ReactJS";
    }, function f2(){
        return "NodeJS";
    }, function f3(){
        return "MongoDB";
    } );
    //ReactJS NodeJS MongoDB
*/


let add = (num,callback)=>{
    return callback(num+5,false);
};
let sub = (num,callback)=>{
    return callback(num-3,false);
};
let mul = (num,callback)=>{
    return callback(num*2,false);
};
let div = (num,callback)=>{
    return callback(num/2-2,false);
};
add(5,(addRes,error)=>{
    if(!error) {
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        })
    };
});
//CallBack Hell  ---- Not Recomended
//Promises
























