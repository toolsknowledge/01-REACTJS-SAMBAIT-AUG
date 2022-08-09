/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello_1");
    });
    async function consume_func(){
        let res = await promise1;
        console.log(res);
    }
    consume_func();
    //Hello_1
*/
function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
}

function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
}

function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
}

function div(num){
    return new Promise((resolve,reject)=>{
        resolve(num/2-2);
    })
}
async function consume_func(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(divRes);
}
consume_func();














