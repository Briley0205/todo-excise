/*

4.0 Input Values (5월 12일)


const loginForm = document.getElementById("");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");


4.1 Form Submission (5월 13일)


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); // loginForm. 대신에 document를 집어 넣는다. 왜 넣는지 모르겠다.
// 아마도 querySelector 이 메소드가 document 객체에 속한 것이기 때문에 그렇게 쓴 것 같다.
function onLoginBtnClick(){
    console.dir(loginINput);  // 입력값을 확인하기 위한 것
    console.log("click!");
}

//input 값이 HTML에 도움을 받기 위해서는 <form>안에 들어가 있어야 한다.


loginButton.addEventListener("click", onLoginBtnClick);



const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); // loginForm. 대신에 document를 집어 넣는다. 왜 넣는지 모르겠다.

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name");
    }else if(username.length >15) {
        alert("Your name is too long."); 
    }
}

        <form id="login-form">  // form을 써 줄 때 input의 유효성 검사를 작동시킬 수 있다. input이 form안에 들어가야 한다.
        <input required maxlength = "15" type="text" placeholder = "What is your name?"/>
        <button> Log In </button>
        </form>


        // 웹사이트를 재시작 시키는 것은 form이 submit(전송)되고 있다.


4.2 Events (5월 13일)


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("summit", onLoginSubmit);

onLoginSubmit ()   // 브라우저는 기본적으로 submit(전송)을 하도록 프로그래밍 되어 있다. 
//그래서  전송하지 않도록 해주어야 한다.


4.3 Events part Two (5월 13일)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault(); //  preventDefault() 이 메소드는 브라우저가 디폴트 값으로 되어 있는 것을 못하도록 하는 것.
    console.log(event);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("Clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick () // information aobut the event that just happened

// 가장 중요한 것은 addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것.


4.4 Getting Username (5월 13일)


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";

function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username; // 이렇게 쓰는 게 번거롭낟. 
    greeting.innerText = `Hello ${username}`; // 이렇게 쓰는 게 더 좋다! 새로운 방법이다!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


4.5 Saving Username (5월 13일)

localStorage // 이 걸 써서 사용자 정보를 저장한다.

localStorage.setItem('myCat', 'Tom');
localStrogae. setItem, getItem, removeItem. 등을 통해 설정, 가져오기 지우기가 된다.

loginForm.addEventListener("submit", onLoginSubmit);

4.5 Saving Username (5월 13일)

4.6 Loarding  Username (5월 13일)

localStorage에 값이 있는지 먼저 확인한다.

4. Super Recap (5월 13일)


5. Intervals (14.5)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username; // 이렇게 쓰는 게 번거롭다. 
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings(savedUsername);
}

function paintGreetings (username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)//show the form
    loginForm.addEventListener("submit", onLoginSubmit);
    
}else{
    paintGreetings(savedUsername);
}

*/



// const loginform = document.getElementById("login-form");
// const loginInput = loginform.querySelector("#loginform input");
// const LoginButton = loginform.querySelector("#loginform button");

/*
6.0 Quotes (16.5)


Maht.randome () // 0에서 1 사이의 수를 임의로 불러옴.
Math.round ()// 반올림 해줌. 
Math.ceil () // 1.0 이상이면 다 2로 바꿈. 즉 소수점 이하는 다 올림.
 Math.floor () // floor(마루)까지 내려 줌. 소숫점 이하는 다 내려버림.

Math.floor(Math.random() * 10);
*/

/*

6.1 Background (16.5)

JS를 이용해서 HTML에 뭔가를 추가하는 기능 구현.

JS에 const bgImage = document.createElement("img");  이렇게만 넣어주면 Element가 HTML에 추가 됨.

document.body.appendChild(bgImage); // 이렇게 해주면 body에 이미지를 추가.

6.3 Recap (16.5)


append 는 이미지가 뒤에 오게 하고 prepend는 이미지가 앞에 오게 한다.

*/

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);



/*

7.0 Setup (16.5)

7.1 Adding ToDos (16.5)

7.2 Deleting To Dos (16.5)

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 이 것과 위의 내용이 같다.
const toDoList = document.getElementById("todo-list");

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo (newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}



function handleToDoSubmit (event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value ="";
paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);



7.3 Saving To Dos (16.5)

String으로 바꾸는 방법
JSON stringify()

    localStorage.setItem("todos", JSON.stringify(toDos)); //localStroge text 만 저장. JSON.stringify() 를 써주어야 string으로 바꿔 줌.

7.4 Loading To Dos part One (17.5)

JSON.parse("[1,2,3,4]") 멋진 array를 가지고 단순한 string으로 바꿀 수 있다.
JSON.parse ("["a","b","b","d","c"]")


7.5 Loading To Dos part Two (17.5)


7.6 Deleting To Dos part One (18.5)

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //

function saveToDos (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStroge text 만 저장. JSON.stringify() 를 써주어야 string으로 바꿔 줌.
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo (newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit (event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value ="";
const newTodoObj = {  // 이걸로 text를 저장하지 않고 object를 저장한다.
    text:newTodo,
    id:Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello (item){
//     console.log("This is the turn of ", item);
// }  // 이 부분을 arrow function으로 바꿔서 표현할 수 있다.

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item)) ;  // 이거 대신에 아래와 같이 써 주면 된다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

fer every array to make ID like this // [{id:121212, text:"drink"}]

Date.now() // 밀리 세컨드로 숫자들을 랜덤하게 만들어 준다. 


7.7 Deleting To Dos part Two (18.5)

filter 

array를 실제로 그걸 지우는 게 아니고 지우고 싶은 item을 빼고 새 array를 만든다.

function sexyFilter(){  // sexyFilter 함수는 반드시 true를 리턴해야한다.

}

[1, 2, 3, 4].filter(sexyFilter) // JS가 sexyFilter를 네 번 부른다. 


const arr = [123214, 5235, 122, 5555, 24, 11, 333]
function sexyFuction (potato) { return potato <= 1000}
arr.filter(sexyFilter)  // 이렇게 하면 1000 미만인 숫자만 나오게 한다.

(4) [122, 24, 11, 333]


7.8 Deleting To Dos part Three (18.5)

const arr = [1, 2, 3, 4]
arr.filter(item => item >2)
const newArr = arr.filter (item => item >2)


*/  

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStroge text 만 저장. JSON.stringify() 를 써주어야 string으로 바꿔 줌.
}

function deleteToDo (event) {
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    // console.log(typeof li.id); // li.id는 string type, toDo.id는 number type
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo (newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit (event){
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value ="";
const newTodoObj = {  // 이걸로 text를 저장하지 않고 object를 저장한다.
    text: newTodo,
    id: Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}





/*

8.0 Geolocation (18.5)

navigator.geolocation.getCurrentPosition(success[, error[, [options]])

8.1 Weather API (18.5)

fetch는 promis 당장 뭔가 일어나지 않고 시간이 좀 지난 후에 일어나는 것.

*/