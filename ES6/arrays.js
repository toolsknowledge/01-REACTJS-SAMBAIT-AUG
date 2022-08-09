//array
//collection of indexed elements called as array

let arr1 = [10,20,30,40,50];
console.log( arr1.length );             //5


let arr2 = [10,20,30,40,50];
delete arr2[0];
console.log(arr2);              //[ <1 empty item>, 20, 30, 40, 50 ]
console.log(arr2.length);       //5


let arr3 = [1,2,3,4,5];
let newArr3 = arr3.map((element,index)=>{
    return element*100;
});
console.log(newArr3);   //[ 100, 200, 300, 400, 500 ]



let arr4 = [100,200,300,400,500];
let newArr4 = arr4.filter(element=>element>=300);
console.log(newArr4);       //[ 300, 400, 500 ]


let arr5 = [1,2,3,4,5];
let newArr5 = arr5.map(element=>element*100).filter(element=>element<=300);
console.log(newArr5);       //[ 100, 200, 300 ]



let arr6 = [1,2,3,4,5];
let arr6Add = arr6.reduce((x,y)=>{
    return x+y;
});
console.log(arr6Add);           //15


let arr7 = [1,2,3,4,5];
let accRes = arr7.map(element=>element*100).filter(element=>element<=300).reduce((e1,e2)=>{
    return e1+e2;
},400);
console.log(accRes);        //1000


let arr8 = [10,20,30,40,50,60,70,80,90,100];
arr8.splice(4,3);
console.log(arr8);          //[10,20,30,40,80,90,100]

arr8.splice(1,2);
console.log(arr8);          //[ 10, 40, 80, 90, 100 ]

arr8.splice(1,0,20,30);
console.log(arr8);         //[ 10, 20, 30, 40, 80, 90, 100 ]


arr8.splice(4,1,50,60,70,80);
console.log(arr8);        //[10,20,30,40,50,60,70,80,90,100]



let arr9 = [20,30,40];
arr9.push(50);
console.log(arr9);                      //[ 20, 30, 40, 50 ]
arr9.unshift(10);
console.log(arr9);                      //[ 10, 20, 30, 40, 50 ]
arr9.pop();
console.log(arr9);                      //[ 10, 20, 30, 40 ]
arr9.shift();
console.log(arr9);                      //[ 20, 30, 40 ]


let arr10 = [10,20,30,40,50];
let xeroxArr10 = [...arr10];

arr10.push(60);
xeroxArr10.push(70);
console.log(arr10);             //[ 10, 20, 30, 40, 50, 60 ]
console.log(xeroxArr10);        //[ 10, 20, 30, 40, 50, 70 ]


let arr11 = [10,20,30,40,50];
let arr12 = [...arr11,60];
let arr13 = [...arr12,70];
console.log(arr11);         //[10,20,30,40,50]
console.log(arr12);         //[10,20,30,40,50,60]
console.log(arr13);         //[10,20,30,40,50,60,70]


let arr14 = [10,20,30];
let arr15 = [40,50,60];
let arr16 = [...arr14,...arr15];
console.log(arr16);         //[ 10, 20, 30, 40, 50, 60 ]


let arr17 = [10,20,30,40,50];
let [a,b,c,d,e] = arr17;
console.log(a,b,c,d,e);     //10 20 30 40 50


let arr18 = [10,20,30,40,50];
let [x,y,...z] = arr18;
console.log(z);                 //[30, 40, 50]
let [g1,...g2] = z;
console.log(g2);                //[ 40, 50 ]
let [z1,z2] = g2;
console.log(z1);                //40



let arr19 = [10,20,30,40,50];
//findIndex()
let i1 = arr19.findIndex((element,index)=>{
    return element == 30;
});
console.log(i1);        //2

let i2 = arr19.findIndex((element,index)=>{
    return element == 50;
});
console.log(i2);        //4


let i3 = arr19.findIndex((element,index)=>{
    return element == 60;
});
console.log(i3);    //-1


let arr20 = [10,20,30,40,50];
let b1 = arr20.some((element,index)=>{
    return element<=10;
});
console.log(b1);            //true


let arr21 = [10,20,30,40,50];
let b2 = arr21.every((element,index)=>{
    return element<100;
});
console.log(b2);        //true



let arr22 = [10,20,30,40,50];
let e1 = arr22.find((element,index)=>{
    return element == 30;
});
console.log(e1);        //30

let e2 = arr22.find((element,index)=>{
    return element == 300;
});
console.log(e2);    //undefined


let arr23 = [10,20,30,40,50];
let t1 = arr23.includes(30);
console.log(t1);        //true
let t2 = arr23.includes(300);
console.log(t2);        //false

























