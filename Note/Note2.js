
/*
 1.13 Conditionals (5월 11일)

const age = parseInt(prompt("How old are you?"));

//"15" => 15 

console.log(age, parseInt(age));

1.14 Conditionals part Two (5월 11일)

if(isNaN(age)){
    console.log("Please write a number");
}

1.15 Conditionals part Three (5월 11일)


if (isNaN(age)) {} // age가 숫자인가를 체크하는 것.

and operator &&
or operator ||  // one of those have to true
more than less than equal 

1.16 Recap (5월 11일)

recap // 개요. 정리하다. 

} else if (age === 10){

=== 자스에서는 순서가 중요하다. 

3.0 The Document Object (5월 11일)

console.dir(document) // document가 어떤 객체인지 보여준다.

console에서 이렇게 치면 document.title / title을 불러온다.

document.title = "asdflasdlfj" // 이렇게 하면 자스에서 타이틀을 바꾸어 준다.
document.body // body를 불러온다.

3.1 HTML in JavaScript (5월 11일)

document.getElementById("title") // 이걸 콘솔에서 부르면 타이틀이 있는 HTML 태그가 나온다.

const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!"; // 이런 식으로 title을 자스에서 바꿀 수 있다.

console.log=(title.id);
console.log=(title.className); // 자스에서 이렇게 불러오는 개념을 아는 것이 아주 중요하다!

3.2 Searching For Elements (5월 11일)

const hellos = document.getElementByClassName("hello")

const title = document.getElementByTagName("h1");

const title = document.querySelector(".hello h1"); // CSS를 위한 class를 불러온다. div 같은 태그도 불러온다.
여러 개 중에 하나만 가져온다.
const title = document.querySelectorAll(".hello h1"); // All을 쓰면 다 가져온다.


const title = document.getElementById("hello");
const title = document.querySelector("#hello");  // 여기 두 개는 같은 것을 불러온다.

3.3 Events (5월 11일)

const title = document.querySelector(".hello:first-child h1");
console.dir("title") // element의 내부를 볼 수 있다.

title.style.color = "blue";


event 를 listen하는 방법을 배우자.

function handleTitleClick()

title.addEventListener("click")


document.title ="JavaScript execise!"


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText ="Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText ="Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("All Good");
}

h1.addEventListener("click", handleTitleClick); // 여기에 ()를 넣치 않고 자바스크립트에 넘겨 준다. // 여기서는 click이라는 이벤트를 듣는다.
// h1.onclick = handleTitleClick; // isto je kao gore.
h1.addEventListener("mouseenter", handleMouseEnter); // () JS ce umesto nas uraditi.
// h1.onmouseenter = handleMouseEnter; // isto je kao gore.
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
// .removeEventListner  ovako moze da izbrise.


3.4 Events part Two (5월 12일)

Good way to find event.
Web API

onchange, onclick, onmouseenter


3.5 More Events (5월 12일)

another way to listen.


3.6 CSS in JavaScript (5월 12일)


document.title ="JavaScript execise!"

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    }else {
    h1.style.color ="blue"; //setter
    }
}
function handleTitleClick() {  // ovako je bolje
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else {
        newColor ="blue"; //setter
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


3.7 CSS in JavaScript part Two (5월 12일)


3.8 CSS in JavaScript part Three (5월 12일)

    
classList - koristiti ovo da ne bi nastao bug.
// classList는 class들의 목록으로 작업할 수 있게 허용해 준다.

<h1 class="sexy/font" // Ako ovako pocne, className izbrise sve.



document.title ="JavaScript execise!"

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList. constains(clickedClass)) {  // element의 class 내용물을 조작하는 것을 허용한다.
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
}
    h1.addEventListener("click", handleTitleClick);

toggle은 h1의 classList에 clicked class가 이미 있는 지 확인해서 만약 있다면 toggle이 clicked를 제거한다.

    



*/

document.title ="JavaScript execise!"

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked"); // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
    // 만약 있으면 toggle이 clicked를 제거해 준다.
    // 만약 h1의 classList에 clicked 가 존재하지 않으면toggle이 clicked를 classList에 추가해 준다.
}
    h1.addEventListener("click", handleTitleClick);


    /*


4.0. Intervals (14.5)



const clock = document.querySelector("h2#clock")

clock.innerText = "dsfsadflka"; // 에고 이거 만드는 것도 쉽지가 않군. id가 clock인 h2 태그의 텍스트를 시계입니다.로 바꾸는 것.

function sayHello (){
//    console.log("hello");
}

//setInterval(sayHello, 5000); // interval 5000 ms로 실행하도록 함.

4.1. Timeouts and Dates (14.5)

const clock = document.querySelector("h2#clock")

function getClock (){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(getClock, 1000); // 여기는 얼마나 오랜 ms를 기다려 실행하도록 할 것인지 정함.

5.2 PadStart (14.5)

"1".padStart(2,"0") // string이 2자리가 아닌 경우 앞자리를 0으로 해달라는 메소드 // padEnd 메소드도 있다. 이건 뒤에다 0dmf ejgksms rosua.

String(new Date().getHours()) // 숫자를 문자로 바꾸어 달라는 메소드


const clock = document.querySelector("h2#clock")

function getClock (){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 여기는 얼마나 오랜 ms를 기다려 실행하도록 할 것인지 정함.

5.3 Recap (14.5)


const clock = document.querySelector("h2#clock")

function getClock (){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 여기는 얼마나 오랜 ms를 기다려 실행하도록 할 것인지 정함.


*/

const clock = document.querySelector("h2#clock")

function getClock (){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
