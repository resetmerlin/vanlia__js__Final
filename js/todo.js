const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput= toDoForm.querySelector("input");
let TODO_Value=[];
const TODOS_KEY="todos";
// function sexyFilter(todo){return todo.id !== li.id}

function deleteToDo(event){
    const li = (event.target.parentElement);
    li.remove();
    TODO_Value = TODO_Value.filter(toDo => toDo.id !==parseInt(li.id));
    saveToDoLists();

    // savedToDoList.filter(sexyFilter);
    // localStorage.setItem(TODOS_KEY,newTodo)
    // TODO_Value.splice(TODOS_KEY, 1);
    // localStorage.setItem(TODOS_KEY,JSON.stringify(TODO_Value));

}
// taget은 클릭된 HTML tag이다/
// parentElement는 클릭된 element의 부모이다.\
function painToDo(newTodo){
    // const listToDO= toDoForm.querySelector.createElement("li");
    // listToDO.innerText = newTodo;


    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;

    const button = document.createElement("button");
    button.innerText = "‼";


    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);





    saveToDoLists(newTodo);
    button.addEventListener("click",deleteToDo);

    //뭔가가 클릭되었다는 걸 확인할 수 있는 방법: EVNENTLISTENER






}


function saveToDoLists(newTodo){

    localStorage.setItem(TODOS_KEY,JSON.stringify(TODO_Value));
    // text값을 string으로 바꾸는 방법은 stringify이다/

    
    
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    // localStorage.setItem(TODO_KEY,newTodo); 
    toDoInput.value="";
    const newTodoObj ={
        text:newTodo,
        id: Date.now()
    }
    TODO_Value.push(newTodoObj);
    painToDo(newTodoObj);


}

toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of",item);
// }



const savedToDoList = localStorage.getItem(TODOS_KEY);

if(savedToDoList !==null){
    const parsedToDos =JSON.parse(savedToDoList);
    TODO_Value = parsedToDos;
        // 는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.

    parsedToDos.forEach(painToDo/*(item) => console.log("this is the turn of ", item)*/);
        // forEach는 function을 실행하게 해준다.

    //or
    //(item)=> console.log("this is the turn of ", item)

    // function sayHello(item){
    //     console.log("this is the turn of ",item)
    // }
        
}
// const toDoData = localStorage.getItem(USERNAME_KEY);


