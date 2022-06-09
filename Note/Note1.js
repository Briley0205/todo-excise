/*
let a = 5;
let b = 2;
let myName = "nico"; //let을 쓸 때는 creat
console.log(a+b);
console.log(a/b);
console.log(a-b);
console.log("hello " + myName);

myName = "nicolas"; // 업데이트를 할 때는 다시 let을 쓰지 않는다.
console.log("your new name is " + myName);

//2.4 Booleans 

const amIFat = null; // 아무 것도 없다고 할 때 null
let something;  // 아무 것도 넣지 않을 때 undefined로 나옴. 
console.log(amIFat);

//2.5 Arrays
// Get Item from Array

console.log(dayOfWeek);  

daysOfWeek.push("sun")    // 

const toBuy = ["Potato", "tomato", "pizza"];
toBuy

//2.6 Objects (객체) 5월 10일

const - 상수라는 의미이다. 
기본적으로는 const를 쓰고 업데이드 해야할 일이 있을 때만 let을 쓴다.
const 이전에는 var만 있었다.const, let으로 쓰면 정확히 의도를 알 수 있다.

property

객체 다음에는 {}
name: "nico", // comma로 연결

2.7 Functions part One (May 11)

개발자는 게을러서 최소한의 코드를 짜고 싶어한다.

function sayHello() {
    console.log("Hello");
}
sayHello();

2.8 Functions part Two (May 11)

const player = {
    name: "nico", 
    sayHello: function (otherPersonname){
        console.log("hello" + otherPersonName + " nice to meet you")
    },
};
player.sayHello("lynn");
player.sayHello("nico");

function plus(a, b){
    console.log(a + b);
}
plus(5, 5);


2.9 Recap (5월 11일)
const a = 5;
let inNicoFat = true;  //

isNicoFat = false;

const toBuy = ["potato", "tomato", "pizza"]
toBuy[2]="water"  // 이런 식으로 배열의 index의 value를 추가할 수 있다.
console.log(toBuy);
toBuy.push("meat")

2.10 Recap II (5월 11일)

const player = {
    name:"nico",
    age:98,
};
console.log(player);
player.name = "nicolas";
console.log(player);


const calculator = {
    add: function (a,b){
        console.log(a+b);
    },
    min:function (a,b){
        console.log(a-b);
    },
    mul:function (a, b){
        console.log(a*b);
    },
    div:function (a, b){
        console.log(a/b);
    },
    squ:function (a, b){
        console.log(a**b);
    },

}
calculator.add(10,5);
calculator.min(7,9);
calculator.mul(120,35);
calculator.div(104,345);
calculator.squ(106,235);


2.11 Returns (5월 11일)
    //console.log를 쓰지 말고 브라우저에서 나오도록 하자.
const calculator = {
    add: function (a,b){
        alert(a+b);
    },
    min:function (a,b){
        alert(a-b);
    },
    mul:function (a, b){
        alert(a*b);
    },
    div:function (a, b){
        alert(a/b);
    },
    squ:function (a, b){
        alert(a**b) },

}
calculator.add(10,5);
calculator.min(7,9);
calculator.mul(120,35);
calculator.div(104,345);
calculator.squ(106,235);

const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner +2;
}

const krAge = calculateKrAge

2.12 Recap (5월 11일)


*/



