//Promises are used to make "async" calls
//Promises are alternative solution for "callbacks"
//Promises are "special javascript objects"
//we will create Promises with the help of "Promise" class
//we will consume Promises in two ways
//1) then()
//2) async & await keywords
//Promises have three states
//1) Pending State
//2) Success State / Resolve State
//3) Failure State / Reject State

/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("welcome to promises");
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("welcome to promises");
        },5000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    }, (errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        resolve("Hello_2");
    });
    
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //Hello_2
    //Hello_1
*/


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },5000);
// });

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },10000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },15000);
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise3.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
//[ 'Hello_1', 'Hello_2', 'Hello_3' ]

// Promise.race([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });
//Hello_1



let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_1");
    },5000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Hello_2");
    },10000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_3");
    },15000);
});

// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



































