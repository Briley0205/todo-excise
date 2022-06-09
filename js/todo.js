const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos ()
}

function saveToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo (newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function toDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    };
    paintToDo (newToDoObj);
    toDos.push (newToDoObj);
    saveToDos ();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}